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
        if question_id not in self.questions:
            self.questions[question_id] = points

    def get_question_points(self, question_id):
        return self.questions.get(question_id, 0)

    def to_dict(self):
        return {
            'project_id': self.project_id,
            'project_name': self.project_name,
            'questions': self.questions
        }

    @staticmethod
    def from_dict(data):
        project = Project(data['project_id'], data['project_name'])
        project.questions = data.get('questions', {})
        return project