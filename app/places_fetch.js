'use client';
import axios from 'axios';

export async function fetchPlaces(userCoordinates, radius) {
  const { lat, lng } = userCoordinates;
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Recursive function to fetch all pages
  async function fetchAllPlaces(url, params, allPlaces = []) {
    try {
      // Fetch the current page of results
      const response = await axios.get(url, { params, headers: { 'X-Requested-With': 'XMLHttpRequest' } });
      const data = response.data;

      if (data.results && data.results.length > 0) {
        console.log(`Fetched ${data.results.length} places`);
      } else {
        console.log('No places found in the current response.');
      }

      // Append current page results to the list of all places
      allPlaces = allPlaces.concat(data.results);

      // Check for the next page token
      if (data.next_page_token) {
        console.log('Next page token found. Waiting before fetching the next page...');
        // Wait 2 seconds before using the next_page_token (Google API requirement)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Fetch the next page recursively
        params.pagetoken = data.next_page_token;
        return fetchAllPlaces(url, params, allPlaces);
      }

      // Return the accumulated list of places
      return allPlaces;
    } catch (error) {
      console.error('Error fetching places:', error);
      throw new Error('Failed to fetch places from API.');
    }
  }

  // Initial request parameters
  const initialParams = {
    location: `${lat},${lng}`,
    radius: radius * 1000, // Convert to meters
    key: apiKey,
  };

  // Start fetching all places recursively
  const allPlaces = await fetchAllPlaces(
    'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    initialParams
  );

  console.log('Finished fetching all places.');
  console.log('Total places fetched:', allPlaces.length);
  console.log('all places:', allPlaces);
  console.log('Retuning places from places fetch to processor file');
  return allPlaces; // Return the consolidated list of places
}

/* 
// ! READ

when we get the first places from the url it only gives us 20 results and a next page token which we can use to get the next 20 results
so here we are using the next page token to get the next 20 results until there is no next page token then we return the accumulated list of places
so what we return is the results of all the pages
*/
