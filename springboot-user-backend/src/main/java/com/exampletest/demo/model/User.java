package com.exampletest.demo.model; //start // start 2

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

// user tables auto generate using entity
@Entity
public class User {

    // auto gen the id for each new input
    @Id
    @GeneratedValue
    // variables from frontend
    long id;
    String mood;
    String activity;
    String hobby;
    String userCoordinates;
    int radius;
    String placename;
    String address;
    int matchpercentage;

    // setters for private
    public void setMood(String mood) {
        this.mood = mood;
    }
    public void setActivity(String activity) {
        this.activity = activity;
    }
    public void setHobby(String hobby) {
        this.hobby = hobby;
    }
    public void setUserCoordinates(String userCoordinates) {
        this.userCoordinates = userCoordinates;
    }
    public void setRadius(int radius) {
        this.radius = radius;
    }
    public void setPlacename(String placename) {
        this.placename = placename;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public void setMatchpercentage(int matchpercentage) {
        this.matchpercentage = matchpercentage;
    }
    

}
