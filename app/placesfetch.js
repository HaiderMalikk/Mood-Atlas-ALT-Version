'use client';
import axios from 'axios';

export async function fetchPlaces(userCoordinates) {
  const { lat, lng } = userCoordinates;
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  try {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
      params: {
        location: `${lat},${lng}`,
        radius: 500,
        key: apiKey
      },
      headers: {
        'X-Requested-With': 'XMLHttpRequest',  // header
        // origin managed automatically
      }
    });

    return response.data; // Return the places data
  } catch (error) {
    console.error('Error fetching places:', error);
    throw new Error('Failed to fetch places from API.');
  }
}