const router = require('express').Router();
const Users = require('../../models/Users');
const Thought = require('../../models/Thoughts');
//check function names to match thought controller
const { getAllThoughts, createThought, getsingleThought, updateThought, deleteThought } = require('../../controllers/thought-controller');

// ALL of these routes are prefixed with '/api/thoughts'
// Change so it looks like users-route
router.get('/', getAllThoughts);
router.post('/', createThought);
router.get('/:id', getsingleThought);
router.put('/:id', updateThought);
router.delete('/:id', deleteThought);

module.exports = router;