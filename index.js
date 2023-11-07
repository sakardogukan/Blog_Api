"use strict"

/* ------------ INDEX.JS----------------- */

/* --------------------------------------- *
$ npm init -y
$ npm i express dotenv express-async-error
$ npm i mongoose
$ echo PORT=8000 > .env
$ echo MONGODB=mongodb://localhost:27017/ >> .env
------------------------------------------ */

const express = require('express')
const app = express()

require('dotenv').config()
// const HOST = process.env.HOST || "127.0.0.1"
const PORT = process.env.PORT || 8000

/* --------------------------------------- */
// SessionCookies:

const session = require('cookie-session')

app.use(session({
    secret: process.env.SECRET_KEY || 'secret_keys_for_cookies',
    //name:'cookie', // default: req.session
    // maxAge: 1000 * 60 * 60 * 24 // 1 day(miliseconds)
}))



app.use(express.json())

//DB Connection
require('./src/dbConnection')

// Home Page:
app.all('/', (req, res) => {
    res.send('Welcome To Home Page - Blog API')
})

//Routes
app.use('/user', require('./src/routes/userRoute'))
app.use('/blog', require('./src/routes/blogRoute'))

// Synchronization: require edilen dosya sync işlemi de fonksiyon olmalıdır.
// require('./src/sync')()

//Error Handler:
app.use(require('./src/errorHandler'))

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))