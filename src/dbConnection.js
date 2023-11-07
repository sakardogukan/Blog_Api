"use strict"

/* ------------ DB Connection ------------ */

const mongoose = require('mongoose')

// const MONGODB = process.env.MONGODB || 'mongodb://localhost:27017/blog_api'
// mongoose.connect(MONGODB)

mongoose.connect(process.env.MONGODB)
    .then(() => console.log(' * DB Connected * '))
    .catch((err) => console.log(' * DB Not Connected * ', err))