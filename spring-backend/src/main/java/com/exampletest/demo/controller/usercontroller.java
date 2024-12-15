package com.exampletest.demo.controller;

import com.exampletest.demo.model.User;
import com.exampletest.demo.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class usercontroller {

    // injecting user
    @Autowired
    private UserRepo userRepo;

    @PostMapping("/user")// path for postman
    // json request for adding new user with 3 vars + id
    User newUser(@RequestBody User newUser){
        return userRepo.save(newUser); // returns saved data
    } // now we can add to sql using post man teh outline is set now 

    // getting users w postman
    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepo.findAll(); // find all given by gpa
    }
}
