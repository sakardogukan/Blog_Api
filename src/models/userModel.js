"use strict";

/* ------------------ USER MODEL -------------------- */

const mongoose = require("mongoose");

const passwordEncrypt =require('../helpers/passwordEncrypt')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'email filed must be required!'],
        // validate: [(email) => { return (email.indexOf('@') > 0 && email.indexOf('.') > 0) }, // Validation check
        validate: [(email) => { return (email.includes('@') > 0 && email.includes('.') > 0) }, // Validation check
            'Email type is incorrect']
    },
    password: {
        type: String,
        trim: true,
        unique: false,
        required: [true, 'password filed must be required!'],
        // set: (password) => password + '*123'
        set: (password) => passwordEncrypt(password)
    },
    firstName: String,
    lastName: String
}, {
    collection: 'users',
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)