### "Chart your feelings, discover your destination."

---

### Project Summary: **Mood Atlas**

**Mood Atlas** is an innovative app that recommends destinations based on user moods, places, or feelings. The project integrates multiple technologies for seamless functionality.

- **Frontend**:  
  - Developed with **React** and **Next.js**.  
  - Uses **Google Maps API** to display locations on a map.  
  - Fetches images and reviews via the **Google Places API** and displays them in user-friendly cards with hyperlinks for quick access to Google Maps.

- **Python AI Backend**:  
  - Processes user prompts and location data.  
  - Leverages **ChatGPT’s LLM** to generate personalized place recommendations.  
  - Incorporates **text embeddings** for semantic understanding of user input.  
  - Returns coordinates (from Google Places API) to pinpoint locations on the map.

- **Spring Boot Backend**:  
  - Manages user data (e.g., name, email) via **SQL** and **Postman**.  
  - Stores user favorites in a **Firebase** database, linked to their email.  

This combination of AI and real-time data creates a personalized experience, guiding users to destinations that match their feelings.

***** CURRENTLY UNDER DEVELOPMENT ***** (there will be slight changes in the future)
TODO: 
- propigate the radius var set by user to the llm procces file and from there to the places fetch to be set as a setting in the fetch
- add a final log at the button where everything is displayed the 3 inputs + radius + procceced data + location + any other 
- fix the json format to recive proper stuff (title, address, location pic is ok, get anything else too)
- featch user location (in page once initial, update everytime by bringing the variable from llm procces file) get new location from json 

once done:
- set up python backend (django ?)
