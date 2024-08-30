from flask import Flask, request, jsonify, session
from models import User, Project
import hashlib, re, hashlib, secrets, os, json, subprocess

secret_key = secrets.token_hex(32)

app = Flask(__name__)
app.secret_key = secret_key

# Path to the JSON file
USERS_FILE = 'users.json'
PROJECTS_FILE = 'projects.json'

# Load users from JSON file
def load_users():
    if os.path.exists(USERS_FILE):
        with open(USERS_FILE, 'r') as file:
            users_data = json.load(file)
            return {username: User.from_dict(data) for username, data in users_data.items()}
    return {}

# Save users to JSON file
def save_users(users):
    with open(USERS_FILE, 'w') as file:
        users_data = {username: user.to_dict() for username, user in users.items()}
        json.dump(users_data, file, indent=4)

# Load projects from JSON file
def load_projects():
    if os.path.exists(PROJECTS_FILE):
        with open(PROJECTS_FILE, 'r') as file:
            projects_data = json.load(file)
            return {proj_id: Project.from_dict(proj) for proj_id, proj in projects_data.items()}
    return {}

# Save projects to JSON file
def save_projects(projects):
    with open(PROJECTS_FILE, 'w') as file:
        projects_data = {proj_id: proj.to_dict() for proj_id, proj in projects.items()}
        json.dump(projects_data, file, indent=4)

# Calculate user score based on progress and project questions
def calculate_user_score(user, projects):
    total_score = 0

    # Iterate over the user's progress
    for project_id, question_id, _ in user.progress:
        if project_id in projects:
            project = projects[project_id]
            total_score += project.get_question_points(question_id)
    
    return total_score

# Register endpoint
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = hashlib.sha256(data.get('password').encode()).hexdigest()

    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400

    users = load_users()

    if username in users:
        return jsonify({'error': 'User already exists'}), 400

    new_user = User(username, password)
    users[username] = new_user
    save_users(users)
    return jsonify({'message': 'User registered successfully'}), 201

# Login endpoint
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = hashlib.sha256(data.get('password').encode()).hexdigest()

    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400

    users = load_users()

    if username not in users or users[username].password != password:
        return jsonify({'error': 'Invalid credentials'}), 401

    session['username'] = username
    return jsonify({'message': 'Login successful'}), 200

# Logout endpoint
@app.route('/logout', methods=['POST'])
def logout():
    session.pop('username', None)
    return jsonify({'message': 'Logout successful'}), 200

@app.route('/user_info', methods=['GET'])
def user_info():
    if 'username' not in session:
        return jsonify({'error': 'Not logged in'}), 401

    username = session['username']
    users = load_users()

    if username not in users:
        return jsonify({'error': 'User not found'}), 404

    user = users[username]
    return jsonify({
        'username': user.username,
        'points': user.points,
        'friends': user.friends,
        'progress': user.progress
    }), 200

@app.route('/make_friend', methods=['POST'])
def make_friend():
    if 'username' not in session:
        return jsonify({'error': 'Not logged in'}), 401

    current_user = session['username']
    data = request.json
    friend_username = data.get('friend_username')

    if not friend_username:
        return jsonify({'error': 'Friend username is required'}), 400

    users = load_users()

    if current_user not in users:
        return jsonify({'error': 'User not found'}), 404

    if friend_username not in users:
        return jsonify({'error': 'Friend not found'}), 404
    
    if friend_username == current_user:
        return jsonify({'error': 'Cannot add yourself as a friend'}), 400
    
    if friend_username in users[current_user].friends:
        return jsonify({'error': 'Friend already added'}), 400

    # Directly get the User object
    user = users[current_user]
    user.add_friend(friend_username)

    # Save updated user data
    save_users(users)

    return jsonify({'message': 'Friend added successfully'}), 200


@app.route('/create_project', methods=['POST'])
def create_project():
    data = request.json
    project_id = data.get('project_id')
    project_name = data.get('project_name')

    if not project_id or not project_name:
        return jsonify({'error': 'Project ID and name are required'}), 400

    projects = load_projects()

    if project_id in projects:
        return jsonify({'error': 'Project already exists'}), 400

    new_project = Project(project_id, project_name)
    projects[project_id] = new_project
    save_projects(projects)

    return jsonify({'message': 'Project created successfully'}), 201

@app.route('/add_question', methods=['POST'])
def add_question():
    data = request.json
    project_id = data.get('project_id')
    question_id = data.get('question_id')
    points = data.get('points')

    if not project_id or not question_id or points is None:
        return jsonify({'error': 'Project ID, question ID, and points are required'}), 400

    projects = load_projects()

    if project_id not in projects:
        return jsonify({'error': 'Project not found'}), 404
    
    # add question already exists

    project = projects[project_id]
    project.add_question(question_id, points)
    save_projects(projects)

    return jsonify({'message': 'Question added successfully'}), 200

@app.route('/calculate_score', methods=['GET'])
def calculate_score():
    if 'username' not in session:
        return jsonify({'error': 'Not logged in'}), 401

    current_user = session['username']
    users = load_users()
    projects = load_projects()

    if current_user not in users:
        return jsonify({'error': 'User not found'}), 404

    # Get the User object directly
    user = users[current_user]
    
    # Calculate the user's score
    score = calculate_user_score(user, projects)
    
    return jsonify({'score': score}), 200

@app.route('/submit-code', methods=['POST'])
def submit_code():
    data = request.json
    code = data.get('code')

    try:
        # Write code to a file
        with open('code.py', 'w') as f:
            f.write(code)

        result = subprocess.run(
            ['python', 'code.py'],
            capture_output=True, text=True
        )

        if result.returncode == 1:
            # result.returncode =
            print(re.search(r", (.*)",result.stderr, re.DOTALL).group(1))
        return jsonify({
            'stdout': result.stdout,
            'stderr': result.stderr,
            'status_code': result.returncode
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5500)
