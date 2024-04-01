const router = require('express').Router();
const thoughtRoutes = require('./thoughts-route');
const userRoutes = require('./users-route');

// All of these routes are already prefixed with '/api'
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;