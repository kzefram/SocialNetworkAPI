const router = require('express').Router();
const { Users } = require('./models');

// get all users
export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await Users.findAll();
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

// Sign up
export const createUser = async (req, res, next) => {
    const { username, password } = req.body;
    let currentuser;
    try {
        currentuser = await User.findOne({ username });
    } catch (err) {
        res.status(500).json(err);
    }
}