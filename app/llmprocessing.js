'use client';
import { fetchPlaces } from "./placesfetch";

export async function processInputs(mood, hobby, activity, userCoordinates) {
  try {
    // Fetch places using the helper function
    const places = await fetchPlaces(userCoordinates);

    // Check if places were retrieved
    if (places && places.length > 0) {
      const title = places[0]?.name || "No place found for your mood.";
      const description = places[1]?.name || "No place found for your hobby.";
      const picture = places[2]?.name || "No place found for your activity.";

      console.log(
        `Place received: Mood - ${title}, Hobby - ${description}, Activity - ${picture}`
      );

      return { title, description, picture };
    } else {
      console.warn("No places found for the given coordinates.");
      return {
        title: `No places found for your mood: "${mood}".`,
        description: `No places found for your hobby: "${hobby}".`,
        picture: `No places found for your activity: "${activity}".`,
      };
    }
  } catch (error) {
    console.error("Error processing inputs in processInputs:", error);
    return {
      title: `Error retrieving places for your mood: "${mood}".`,
      description: `Error retrieving places for your hobby: "${hobby}".`,
      picture: `Error retrieving places for your activity: "${activity}".`,
    };
  }
}
