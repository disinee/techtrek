from flask import Flask, request, jsonify
import subprocess
import os
import re

app = Flask(__name__)

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
