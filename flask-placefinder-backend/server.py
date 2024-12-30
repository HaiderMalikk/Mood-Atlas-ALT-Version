from flask import Flask, request, jsonify  # jsonify for API response
from flask_cors import CORS  # for cross-origin requests
from langchain_openai import ChatOpenAI # LLM model
from langchain_core.prompts import ChatPromptTemplate # for making custom prompts
from dotenv import load_dotenv # for loading environment variables
import os # for accessing environment variables
import json # for loading JSON data

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
            load_dotenv() # load environment variables

            print("POST request received with the following data:")
            print(f"Mood: {mood}")
            print(f"Hobby: {hobby}")
            print(f"Activity: {activity}")
            print(f"Places Received, Places length: {len(places)}")
            
            
            # Process the places using gpt
            # ...
            # ! ALWAYS IGNORE FIRST OBJECT IN RESULS ITS THE CITY ITSELF
            print("Processing places...")
            # Create a new ChatOpenAI model
            OPENAPI_API_KEY = os.environ.get('OPENAI_API_KEY')
            llm = ChatOpenAI(model="gpt-4o-mini", api_key=OPENAPI_API_KEY, temperature=0.2, max_tokens=2048)
            # create prompt
            prompt_template = """
            You are a place selector your job is to find a place for the attributes of the user which are as follows:
            Users Mood: {mood}, Users Hobbies: {hobby}, Users Activities: {activity}

            You are also given a key value pair as follows: Key = place number and Value = place name. 
            Your job is too find the best place for the user based on the given attributes.
            you do this by looking at the name of the place which is the value.
            When you find the right place return its key your answer must be a single integer in the range of keys given in the problem.
            then you must return a match score from 0-100 which is the score of how well the place matches the user.
            this score must be seperated by a commas 
            the final answer will be in the following format: key, match_score
            YOU MUST RETURN A VALID INTEGER AND NOTHING ELSE, EVEN IF THE USER HAS NO MATCHING PLACE RETURN YOU BEST GUESS. ALSO RETURN A MATCH PERCENTAGE EVEN IF ITS 0
            JUST FOR YOU REFERENCE THE MAX NUMBER YOU CAN GOTO IS THE MAX NUMBER OF OBJECTS IN THE LIST OF PLACES WHICH IS: {places_len}
            Here is the list of places:
            {places}
            """
            # fill in promt
            prompt = ChatPromptTemplate.from_template(prompt_template) # creating the prompt using the chat prompt template library
            final_prompt = prompt.format(mood = mood, hobby = hobby, activity = activity, places = places, places_len = len(places)) # passing in the context and question to the prompt
            
            result = llm.invoke(final_prompt) # returns alot of info
            result_answer = result.content # get the answer of the promt only i.e the content 
            # format of result_answer is a string in format int, int = key, match_score so i split on ',' to get both values sepretly
            answer = result_answer.split(',') # format: key, match_score 
            final_place_number = answer[0]
            match_score = answer[1]
            print(f"Final Place Number: {final_place_number}, Match Score: {match_score}")
                        

            # Construct response data
            response_data = {
                'place number from llm': final_place_number, 
                'matchscore': match_score
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
    app.run(debug=True, port=8080)  # Run the app on port 8080
