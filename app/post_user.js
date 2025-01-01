import axios from "axios";

// PostUser function to send data to the backend
export async function PostUser(userInfo) {
  try {
    const url = 'http://localhost:8080/users'; // Your backend endpoint
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Proxy URL for CORS handling

    // Combine the proxy URL with your actual backend URL
    const fullUrl = `${proxyUrl}${url}`;

    // Send the data with axios
    const response = await axios.post(fullUrl, {
      mood: userInfo.mood,
      activity: userInfo.activity,
      hobby: userInfo.hobby,
      userCoordinates: userInfo.userCoordinates,
      radius: userInfo.radius,
      placename: userInfo.placename,
      placelocation: userInfo.placelocation,
      matchscore: userInfo.matchscore,
    }, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest', // You can add other headers here if needed
      }
    });

    return response.data; // Return the response for the caller to handle
  } catch (error) {
    console.log("Error posting user info:", error);
    throw error; // Rethrow error to the caller for further handling
  }
}
