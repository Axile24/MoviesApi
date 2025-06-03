const mongoose = require('mongoose');



/*Define the Movie model schema using Mongoose
A User can write many Reviews (User 1---* Review)
A Movie can have many Reviews (Movie 1---* Review)
Each Review references one User and one Movie*/

// Movie Schema
const Movie = mongoose.model('Movie', {
    title: {
        type: String, 
        required: true 
    },
    director: { 
        type: String, 
        required: true 
    },
    releaseYear: { 
        type: Number, 
        required: true 
    },
    genre: { 
        type: String, 
        required: true 
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }
});

module.exports = Movie