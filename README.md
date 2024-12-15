Mood Atlas:
"Chart your feelings, discover your destination."

Summary:
This app has a front end in react and nextjs using google places api we get places near the user then we feed
this into our python AI backend along with the user promt we them use chat gpt's llm to generate a place for
the user to visit, we return the cords wchich we get from a json file given by google places api, the gpt promt
uses text embeddings along with a formatted output to give the best output for where the user should go, 
and it returns the cordinates of the place. this set of cordinates is displayed on a map using google maps api
and we uses places api agai nto get a pic / reviews for a card to be displayed giving quick context on the place
and a hyper link to open in maps. the backend also includes a springboot app that uses postman and sql to store user info,
this can be used to get the users info like name and email this is stored i a sql data base using postman,
this is then linked to the users data like favorite places whihc is linked to there email and stored in a firebase database.


