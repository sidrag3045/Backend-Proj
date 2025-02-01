// Requiing modules
const mongoose = require('mongoose');

// Defining Event schema
const eventSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    participants:[
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'user' 
        }
    ],
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    }
}, {timestamps: true});

// Defining Event model
const Event = mongoose.model('event', eventSchema);

// Exporting Event model
module.exports = Event;