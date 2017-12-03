/**
 * /app/api/models/userModel.js
**/

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    version: {
        type: Number
    },
    firstName: {
        type: String,
        required: 'First Name is required'
    },
    lastName: {
        type: String,
        required: 'Last Name is required'
    },
    emailAddr: {
        type: String,
        required: 'Email Address is required'
    },
    passWord: {
        type: String,
        required: 'Password is required'
    },
    userRole: {
        type:[{
            type: String,
            enum: [
                'administrator',
                'contributor',
                'moderator'
            ]
        }],
        default: ['contributor']
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('users', UsersSchema);
