'use client';
import { fetchPlaces } from "./places_fetch";
import React, { useState, useEffect } from "react";

export async function processInputs(mood, hobby, activity, userCoordinates, radius) {
  try {
    // Fetch places using the helper function
    const places = await fetchPlaces(userCoordinates, radius);
    console.log("Places received at llm");
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    // send data and recive answer from flask

    console.log("Flask called");

    // Check if places were retrieved
    if (places && places.results && places.results.length > 0) {
      // Extract details for place
      const firstPlace = places.results[1];
      const title = firstPlace.name || "No place found for your mood.";
      const address = firstPlace.vicinity || "No place found for your hobby.";
      const photoReference = firstPlace.photos && firstPlace.photos[0]?.photo_reference 
                              ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${firstPlace.photos[0].photo_reference}&key=${apiKey}` 
                              : "No photo available.";

      console.log(`Final Processed Place: Name - ${title}, Address - ${address}, Photo URL - ${photoReference}`);

      return { name: title, address: address, photoReference: photoReference }; 
    } else {
      console.warn("No places found for the given coordinates.", places);
      return {
        name: `No places found for your mood: "${mood}".`,
        address: `No places found for your hobby: "${hobby}".`,
        photoReference: `No places found for your activity: "${activity}".`,
      };
    }
  } catch (error) {
    console.error("Error processing inputs in processInputs:", error);
    return {
      name: `Error retrieving places for your mood: "${mood}".`,
      address: `Error retrieving places for your hobby: "${hobby}".`,
      photoReference: `Error retrieving places for your activity: "${activity}".`,
    };
  }
}
