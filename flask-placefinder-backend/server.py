from flask import Flask, request, jsonify  # jsonify for API response
from flask_cors import CORS  # for cross-origin requests
import random

# Create Flask app
app = Flask(__name__)
CORS(app)  # Enable cross-origin requests

print("Server started, processing requests...")

@app.route('/api/home', methods=['POST', 'GET'])
def process_places():
    # Initialize response data
    response_data = {}

    if request.method == 'POST':
        # Check if the request contains JSON data
        if request.is_json:
            # Parse JSON from the request body
            data = request.get_json()

            # Extract individual parameters
            places = data.get('places', [])
            mood = data.get('mood', 'No mood provided')
            hobby = data.get('hobby', 'No hobby provided')
            activity = data.get('activity', 'No activity provided')

            print("POST request received with the Places + following data:")
            print(f"Mood: {mood}")
            print(f"Hobby: {hobby}")
            print(f"Activity: {activity}")
            
            
            # Process the places using gpt
            # ...
            matchscore = 100
            # ! ALWAYS IGNORE FIRST OBJECT IN RESULS ITS THE CITY ITSELF
            
            
            

            # Construct response data
            response_data = {
                'mood': mood,
                'hobby': hobby,
                'activity': activity,
                'place number from llm': random.randint(0, len(places)),  # Add a random integer
                'matchscore': matchscore
            }
        else:
            print("Invalid JSON format in request.")
            return jsonify({'error': 'Invalid JSON format'}), 400

    elif request.method == 'GET':
        print("GET request received. Returning default response.")
        response_data = {
            'message': 'This endpoint supports POST requests for processing data.',
        }

    # Return the response data as JSON
    return jsonify(response_data)

# Run the app
if __name__ == '__main__':
    app.run(debug=True, port=8080)  # Run the app on port 8080
