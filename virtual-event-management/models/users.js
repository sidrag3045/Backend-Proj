const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is required"],
        minlength: [4,"Name must be at least 4 characters long"],
        maxlength : [100,"Name cannot exceed more than 100 characters"]
        },
    email: {
        type: String,
        required: [true,"Email is required"],
        unique: true,
        lowercase: true
        },
    password: {
        type: String,
        required: true,
        minlength: [6,"Password must be at least 6 characters long"]
        },
    role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        }
});

const User = mongoose.model('user', userSchema);

module.exports = User;