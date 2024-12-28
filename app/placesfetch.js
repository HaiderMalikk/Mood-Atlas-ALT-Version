'use client';
import axios from "axios";

export async function fetchPlaces(userCoordinates) {
  const placesApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const { lat, lng } = userCoordinates;

  try {
    // Make the API call to fetch places
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
      {
        params: {
          location: `${lat},${lng}`,
          radius: 500,
          key: placesApiKey,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.results; // Return the results array
  } catch (error) {
    console.error("Error fetching places in placesfetch.js:", error);
    throw new Error("Failed to fetch places from API.");
  }
}
