const mongoose = require('mongoose');

// Create a schema for the user data
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
});


// Create a model based on the schema
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;