class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.points = 0
        self.friends = []
        self.progress = []

    def update_progress(self, project_id, question_id, completion_percentage):
        for i, (proj_id, ques_id, _) in enumerate(self.progress):
            if proj_id == project_id and ques_id == question_id:
                self.progress[i] = (project_id, question_id, completion_percentage)
                return
        self.progress.append((project_id, question_id, completion_percentage))

    def to_dict(self):
        return {
            'username': self.username,
            'password': self.password,
            'points': self.points,
            'friends': self.friends,
            'progress': self.progress
        }
    
    def add_friend(self, friend_username):
        if friend_username not in self.friends:
            self.friends.append(friend_username)

    @staticmethod
    def from_dict(data):
        user = User(data['username'], data['password'])
        user.points = data.get('points', 0)
        user.friends = data.get('friends', [])
        user.progress = data.get('progress', [])
        return user

class Project:
    def __init__(self, project_id, project_name):
        self.project_id = project_id
        self.project_name = project_name
        self.questions = {}  # {question_id: points}

    def add_question(self, question_id, points):
        self.questions[int(question_id)] = int(points)  # Ensure keys are integers

    def get_question_points(self, question_id):
        return self.questions.get(int(question_id), 0)  # Ensure question_id is an integer

    def to_dict(self):
        return {
            'project_id': self.project_id,
            'project_name': self.project_name,
            'questions': {qid: int(points) for qid, points in self.questions.items()}  # Ensure points are integers
        }

    @staticmethod
    def from_dict(data):
        project = Project(data['project_id'], data['project_name'])
        project.questions = {int(qid): int(points) for qid, points in data.get('questions', {}).items()}  # Convert to integers
        return project
 
class Leaderboard:
    def __init__(self):
        self.leaderboard = []  # List of dictionaries
        self.min_leaderboard_score = 0  # Initialize min_leaderboard_score

    def update_leaderboard(self, username, score):
        # Check if the user is already in the leaderboard
        for entry in self.leaderboard:
            if entry['username'] == username:
                entry['score'] = score
                break
        else:
            # If the user is not in the leaderboard, add them
            self.leaderboard.append({'username': username, 'score': score})

        # Sort the leaderboard by score in descending order
        self.leaderboard.sort(key=lambda x: x['score'], reverse=True)

        # Keep only the top 5 users
        self.leaderboard = self.leaderboard[:5]

        # Update min_leaderboard_score
        if self.leaderboard:
            self.min_leaderboard_score = self.leaderboard[-1]['score']

    def get_leaderboard(self):
        return self.leaderboard
