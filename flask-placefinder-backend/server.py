from flask import Flask, request, jsonify # jsonify for api response
from flask_cors import CORS # for cross origin requests
import random

# create app
app = Flask(__name__) 
CORS(app) # enable cross origin requests

# app route (app can be accessed at route)

# once you get json just print it and give a rand number
@app.route('/api/home', methods=['GET'])
def return_home():
    return jsonify({'place number from llm': random.randint(1,10)})



# run app
if __name__ == '__main__':
    app.run(debug=True, port=8080) # run the app in debug mode, once deployed, set to False, 8080 as 5000 is bad
    
# to run first 
"""  
cd flask-placefinder-backend # go to the flask-placefinder-backend directory
source venv/bin/activate # activate virtual environment 
python server.py # run the server
# install any missing packages before running
"""