//const router = require('express').Router();
//const { Users } = require('./models');
const User = require('../models/Users');

// get all users
//export const getAllUsers = async (req, res, next) => {
const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
    if (!users) {
        res.status(404).json({ message: 'No user found here!' });
        return;
    }
    return res.status(200).json({ users });
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
const createUser = async (req, res, next) => {
    const { username, password } = req.body;
    let currentuser;
    try {
        currentuser = await User.findOne({ username });
    } catch (err) {
        res.status(500).json(err);
    }
}



module.exports = { getAllUsers, createUser }