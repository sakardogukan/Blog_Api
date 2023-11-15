"use strict"

/* --------------------INDEX.JS------------------------
                BLOG_API_APP PROJECT
------------------------------------------------------- */

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000

/* ------------------------------------------------------- */
//! Cookie-Session:
const session = require("cookie-session")
app.use(session({
    secret: process.env.SECRET_KEY || 'secret_keys_for_cookies',
    // name: 'cookie', // default: req.session
    // maxAge: 1000 * 60 * 60 * 24 // 1 day (miliseconds)
}))

app.use(express.json())

//! DB Connection
require('./src/dbConnection')

//! Searching & Sorting & Pagination
app.use(require('./src/middlewares/findSearchSortPage'))

//! Home Page
app.all('/', (req, res) => {
    res.send('WELCOME TO BLOG API')
})

//! Routes:
app.use('/user', require('./src/routes/userRoute'))
app.use('/blog', require('./src/routes/blogRoute'))

//! Synchronisation:
// require('./src/sync')()

//! Errorhandler
app.use(require('./src/errorHandler'))

//! Port Listen
app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))