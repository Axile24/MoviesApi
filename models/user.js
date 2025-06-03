const mongoose = require('mongoose')

// User Schema      
// A User can write many Reviews (User 1---* Review)
// A User can have many Movies (User 1---* Movie)   
const User = mongoose.model('User', {
    username: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { type: String, 
        enum: ['user', 'admin'], 
        default: 'user' 
    }

});

module.exports = User