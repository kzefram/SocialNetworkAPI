//const router = require('express').Router();
//const { Users } = require('./models');
const User = require('../models/Users');

// get all users
//export const getAllUsers = async (req, res, next) => {
const getAllUsers = async (req, res) => {
    let users;
    try {
        users = await User.find();
        console.log("Users: ", users);
        if (!users) {
            res.status(404).json({ message: 'No user found here!' });
            return;
        }
        res.status(200).json(users);
    } catch (err) {
        console.log("Server Error: ", err)
        res.status(500).json(err);
    }
   // return res.status(200).json({ users });
}  


// This is typical PROMISE .then/.catch ASYNC syntax
const otherGetAll = ()  => {
    User.findAll()
        .then(userData => res.status(200).json(userData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    // this data is processed before our ASYNC opertaion completes
}

// Sign up
//export const createUser = async (req, res, next) => {
const createUser = async (req, res) => {
    console.log("req.body: ", req.body);
    const { username, password } = req.body;
    let currentuser;
    try {
        // Check is there an EXISTING USER by this username
        currentuser = await User.findOne({ username });
        console.log("Current User: ", currentuser);
        // IF there ALREADY Exissts a USER by this username --> DO NOT CREATE 
        if(currentuser) {
            res.status(400).json({ message: 'User already exists!' });
            return;
        }

        // THEN WE CREATE A NEW USER (in the DB)
        let newUser = await User.create(req.body);  // WE create a new USER using the ASYNC/AWAIT ES6+ syntax
        
        /*  MONGOOSE CREATE METHOD USING PROMISES SYNTAX
        User.create(req.body)
            .then(newUser => {
                console.log("Data: ", newUser)
                res.status(201).json(newUser)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
        */
        // let newUser = await User.create({username: username, password: password});

        console.log("New User: ", newUser);
        res.status(201).json(newUser);
        //res.status(201).json({"message": "User created"});
    } catch (err) {
        console.log('Error: ', err);
        res.status(500).json(err);
    }
}



module.exports = { getAllUsers, createUser }