class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.points = 0
        self.friends = []
        self.progress = []

    def add_friend(self, friend_username):
        if friend_username not in self.friends:
            self.friends.append(friend_username)

    def update_progress(self, project_id, completion_percentage):
        for i, (proj_id, _) in enumerate(self.progress):
            if proj_id == project_id:
                self.progress[i] = (project_id, completion_percentage)
                return
        self.progress.append((project_id, completion_percentage))

    def to_dict(self):
        return {
            'username': self.username,
            'password': self.password,
            'points': self.points,
            'friends': self.friends,
            'progress': self.progress
        }

    @staticmethod
    def from_dict(data):
        user = User(data['username'], data['password'])
        user.points = data.get('points', 0)
        user.friends = data.get('friends', [])
        user.progress = data.get('progress', [])
        return user
