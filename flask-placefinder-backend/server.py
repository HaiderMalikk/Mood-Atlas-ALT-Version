from flask import Flask, request, jsonify # jsonify for api response
from flask_cors import CORS # for cross origin requests

# create app
app = Flask(__name__) 
CORS(app) # enable cross origin requests

# app route (app can be accessed at route)
@app.route('/api/home', methods=['GET'])
def return_home():
    return jsonify({'message': 'Welcome to Place Finder API'})



# run app
if __name__ == '__main__':
    app.run(debug=True, port=8080) # run the app in debug mode, once deployed, set to False, 8080 as 5000 is bad
    