'use client';

export async function fetchFlaskData(places) {
  console.log("Flask result is being fetched");

  try {
    // Make a GET request to the Flask endpoint
    const response = await fetch('http://127.0.0.1:8080/api/home');

    if (!response.ok) {
      throw new Error(`Flask backend error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Data received from Flask, returning data");

    return data; // Return the data received from Flask
  } catch (error) {
    console.error("Error calling Flask backend:", error);
    return null; // Return null on error
  }
}
