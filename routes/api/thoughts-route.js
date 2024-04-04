const router = require('express').Router();
const Users = require('../../models/Users');
const Thought = require('../../models/Thoughts');
const { getAllThoughts, createThought, getsingleThought, updateThought, deleteThought } = require('../../controllers/thought-controller');

// ALL of these routes are prefixed with '/api/thoughts'
router.get('/', getAllThoughts);
router.post('/', createThought);
router.get('/:id', getsingleThought);
router.put('/:id', updateThought);
router.delete('/:id', deleteThought);

module.exports = router;