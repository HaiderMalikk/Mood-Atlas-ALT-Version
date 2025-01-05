from flask import Flask, request, jsonify  # jsonify for API response
from flask_cors import CORS  # for cross-origin requests
from langchain_openai import ChatOpenAI # LLM model
from langchain_core.prompts import ChatPromptTemplate # for making custom prompts
from dotenv import load_dotenv # for loading environment variables
import os # for accessing environment variables

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
            gonow = data.get('gonow', False)
            load_dotenv() # load environment variables

            print("POST request received with the following data:")
            print(f"Mood: {mood}")
            print(f"Hobby: {hobby}")
            print(f"Activity: {activity}")
            print(f"Places Received, Places length: {len(places)}")
            
            # remove first element and format the places into a dictionary to remove unnecessary data keeping only the name of the place
            
            counter = 0
            formatted_places = {}

            for place in places:
                name = place['name']
                types = ", ".join(place.get('types', []))  # Convert list to comma-separated string

                formatted_places[counter] = {
                    "name": name,
                    "type": types
                }
                counter += 1

            print("Formatted Places:", formatted_places)
            
            # Process the places using gpt
            # ...
            print("Processing places...")
            # Create a new ChatOpenAI model
            OPENAPI_API_KEY = os.environ.get('OPENAI_API_KEY')
            llm = ChatOpenAI(model="gpt-4o-mini", api_key=OPENAPI_API_KEY, temperature=0.8)
            # create prompt
            prompt_template = """
            You are a place recommender designed to suggest the best place based on a user's preferences. Your task is to find the ideal place for a user based on the following attributes:

            - User's Mood: {mood}
            - User's Hobbies: {hobby}
            - User's Activities: {activity}

            If any of these attributes are missing or not provided, assume they are blank or N/A and make your best guess. If the user provides no attributes, rely on your own judgment to suggest a place.

            You are given a dictionary where the key is the place number and the value contains information about each place in the following format:

            - `name`: The name of the place (e.g., 'Central Park')
            - `type`: A comma-separated list of types (e.g., 'park, outdoor, nature')

            Your goal is to suggest the best place based on the user's attributes. To do this, you should analyze the place's name and types. The types provide information about what kind of place it is (e.g., park, restaurant, museum). Match these attributes with the user's provided mood, hobbies, and activities to find the most suitable place.

            After identifying the best place, return the following:
            1. The place's key (index number).
            2. A match score, which is a percentage (0-100), indicating how well the place matches the user's preferences.

            Your answer should be in the format:
            key, match_score
            YOU MUST RETURN A VALID INTEGER AND NOTHING ELSE, EVEN IF THE USER HAS NO MATCHING PLACE RETURN YOU BEST GUESS. 
            SAME FOR THE MATCH SCORE.

            For reference, you can only choose a place from the given list. The maximum possible index value is {places_len}.

            Here is the list of places with their details:
            {places}
            """
            # fill in prompt
            prompt = ChatPromptTemplate.from_template(prompt_template) # creating the prompt using the chat prompt template library
            final_prompt = prompt.format(mood = mood, hobby = hobby, activity = activity, places = formatted_places, places_len = len(formatted_places)) # passing in the context and question to the prompt
            
            result = llm.invoke(final_prompt) # returns alot of info
            result_answer = result.content # get the answer of the promt only i.e the content 
            # format of result_answer is a string in format int, int = key, match_score so i split on ',' to get both values sepretly
            answer = result_answer.split(',') # format: key, match_score 
            final_place_number = answer[0]
            match_score = answer[1] + "%"
            print(f"Final Place Number: {final_place_number}, Match Score: {match_score}")
            
            status = "LLM was invoked"
            # error check
            error = False
            if not final_place_number.isdigit():
                final_place_number = 0 # set to 0 if no match 0 is the city itself
                status += " | Could Not Calculate Place Number: It was not a number"
                error = True
            elif int(final_place_number) > len(formatted_places):
                final_place_number = 0 # set to 0 if no match 0 is the city itself
                status += " | Could Not Calculate Place Number: It was not in range"
                error = True
            if match_score == 'None':
                match_score = "Could Not Calculate"
                status += " | Could Not Calculate Match Score"
                error = True
            if not error:
                status += " | Place generation was a success"

            # Construct response data
            response_data = {
                'place number from llm': final_place_number, 
                'matchscore': match_score,
                'status': status
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
    print("Returning response data:", response_data)
    return jsonify(response_data)

# Run the app
if __name__ == '__main__':
    app.run(debug=True, port=8080)  # Run the app on port 8080, TURN OFF DEBUG MODE IN PRODUCTION
