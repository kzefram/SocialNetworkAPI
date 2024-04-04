const router = require('express').Router();
const Users  = require('../models/Users');
const Thought = require('../models/Thoughts');

const getAllThoughts = (req, res) => {
    Thought.find({})
        .then(dbThoughtData => {
            console.log("Thought: ", dbThoughtData);
            res.status(200).json(dbThoughtData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
    
const createThought = (req, res) => {
    console.log("Request Body: ", req.body);
        // FIRST we create a NEW THOUGHT INSTANCE
    Thought.create(req.body)
        .then(newThought => {
            console.log("New Thought: ", newThought);
                // HOW do we associate this new thought with a USER?
            populate({ path: 'thoughts', select: '-__v' })    
                // Return data to the client
            res.status(201).json(newThought);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}

const getsingleThought = (req, res) => {
    console.log("Single Thought ID: ", req.params.id);
    Thought.findOne({ _id: req.params.id })
        .then(ThoughtData => {
            if (!ThoughtData) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }
            res.status(200).json(ThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}

const updateThought = (req, res) => {
    console.log("Update Thought ID: ", req.params.id);
    Thought.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(ThoughtData => {
            if (!ThoughtData) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }
            res.status(200).json(ThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}

const deleteThought = (req, res) => {
    console.log("Delete Thought ID: ", req.params.id);
    Thought.findOneAndDelete({ _id: req.params.id })
        .then(ThoughtData => {
            if (!ThoughtData) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }
            res.status(200).json(ThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}

module.exports = { getAllThoughts, createThought, getsingleThought, updateThought, deleteThought};