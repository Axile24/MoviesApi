const mongoose = require('mongoose')

// Review Schema
// A Review is associated with one Movie and one User
// A User can write many Reviews (User 1---* Review)
// A Movie can have many Reviews (Movie 1---* Review)   
const Review = mongoose.model('Review', {
    movieId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie', 
        required: true 
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    rating: { 
        type: Number, 
        min: 1, 
        max: 10, 
        required: true 
    },
    comment: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }

});

module.exports = Review 