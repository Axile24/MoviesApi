/**
 * Movie Routes
 * Handles CRUD operations for movies
 * Protected routes require authentication via JWT token
 */

const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const checkAuth = require('../middlewares/checkAuth');

// Create a new movie (requires authentication)
// POST /movies
router.post('/movies', checkAuth, movieController.createMovie);

// Get all movies (public route)
// GET /movies
router.get('/movies', movieController.getAllMovies)

// Get a specific movie by ID (public route)
// GET /movies/:id
router.get('/movies/:id', movieController.getMovieById);

// Update a movie (requires authentication)
// PUT /movies/:id
router.put('/movies/:id', checkAuth, movieController.updateMovie);

// GET /movies/:id/reviews
router.get('/movies/:id/reviews', movieController.getMoviesReviews);

// Delete a movie (requires authentication)
// DELETE /movies/:id
router.delete('/movies/:id', checkAuth, movieController.deleteMovie);

module.exports = router;
