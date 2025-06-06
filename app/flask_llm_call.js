'use client';

export async function fetchFlaskData(places, mood, hobby, activity) {
  console.log("Getting response from Flask API in flask call file");

  try {
    // Make a POST request to the Flask backend
    const response = await fetch('http://127.0.0.1:8080/api/home', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Send JSON data
      },
      // Send all parameters as a single JSON object
      body: JSON.stringify({
        places,
        mood,
        hobby,
        activity,
      }),
    });

    if (!response.ok) {
      throw new Error(`Flask backend error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Data received from Flask: sending to proccess file. Data from flask:", data);

    return data; // Return the response from Flask
  } catch (error) {
    console.error("Error calling Flask backend:", error);
    return null; // Return null on error
  }
}
