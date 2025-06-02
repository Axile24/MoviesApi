/**
 * Review Routes
 * Handles CRUD operations for movie reviews
 * Protected routes require authentication via JWT token
 */

const router = require('express').Router();
const reviewController = require('../controllers/reviewController');
const checkAuth = require('../middlewares/checkAuth');

// Create a new review (requires authentication)
// POST /reviews
router.post('/reviews', checkAuth, reviewController.addReview);

// Get all reviews (public route)
// GET /reviews
router.get('/reviews', reviewController.getAllReviews);

// Get a specific review by ID (public route)
// GET /reviews/:id
router.get('/reviews/:id', reviewController.getReviewById);

// Update a review (requires authentication)
// PUT /reviews/:id
router.put('/reviews/:id', checkAuth, reviewController.updateReview);

// Delete a review (requires authentication)
// DELETE /reviews/:id
router.delete('/reviews/:id', checkAuth, reviewController.deleteReview);

module.exports = router;
