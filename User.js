const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    friend: mongoose.SchemaTypes.ObjectId, // type for referencing other models
    hobbies: [String],
    address: {
        street: String,
        city: String
    }
});

module.exports = mongoose.model('user', User);