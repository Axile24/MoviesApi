/**
 * Main application file for the Movies Reviews API
 * This file sets up the Express server, connects to MongoDB, and configures routes
 */

// Import required dependencies
require('dotenv').config()  // Load environment variables
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Initialize Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Root route - Welcome message
app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the API!" })
});

// Import route handlers
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes')

// Register routes with the application
app.use('/', userRoutes);    // User authentication routes
app.use('/', movieRoutes);   // Movie management routes
app.use('/', reviewRoutes)   // Review management routes

// MongoDB connection configuration
const mongoUri = process.env.MONGODB_URI;

// Connect to MongoDB and start the server
mongoose
.connect(mongoUri)
.then(() => {
    // Start the Express server after successful database connection
    app.listen(3000, () => {
        console.log('[........] Connected to the database! DOCKER SUCESS');
        console.log('[........] Server is running on port 3000');
    });
})
.catch((err) => console.log(err));

// 4 Create a new project in MongoDB and put a username and password in the .env file
// 6 Create models
// 7 Create routes