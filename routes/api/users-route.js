const express = require('express');
const router = express.Router();
const { getAllUsers, createUser } = require('../../controllers/user-controller');

router.get('/', getAllUsers);

//router.get('/:id', getUserById);

router.post('/', createUser);

//router.put('/:id', updateUser);

//router.delete('/:id', deleteUser);

module.exports = router;