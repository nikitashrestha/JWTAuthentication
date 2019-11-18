const express = require('express');
const userRoutes = require('./routes/user.routes');

/**
 * Contains all API routes for the application.
 */
const router = express.Router();

router.use('/user', userRoutes);

module.exports = router;