/**
 * User Routes
 * Handles user authentication and registration endpoints
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const checkAuth = require('../middlewares/checkAuth');

// Register a new user
// POST /register
router.post('/register', userController.registerUser);

// Authenticate user and return JWT token
// POST /login
router.post('/login', userController.loginUser);

module.exports = router;
