"use strict"

/* ------------ User Model ------------ */

const mongoose = require('mongoose')
const passwordEncrypt = require('../helpers/passwordEncrypt')

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: false,
        required: [true, 'Email field must be required.'],
        validate: [
            (email) => (email.includes('@') && email.includes('.')), 'Email type is incorrect.'
        ]
    },

    password: {
        type: String,
        trim: true,
        unique: false,
        required: [false, 'Password field must be required !'],
        // set: (password) => password + '*987'
        set: (password) => passwordEncrypt(password)
    },

    firstName: String,

    lastName: String,
},
    {
        collection: 'users',
        timestamps: true
    })

module.exports = mongoose.model('User', UserSchema)