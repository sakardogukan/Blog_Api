"use strict"

/* ------------ DB Connection ------------ */

const crypto = require('node:crypto')

const keyCode = process.env.SECRET_KEY || 'write_random_chars_to_here'
const loopCount = 10_000
const charsCount = 32
const encType = 'sha512'

module.exports = function (password) {
    //const encode = crypto.pbkdf2(password, keyCode, loopCount, charsCount, encType) // return BufferType -- ASYNC
    const encode = crypto.pbkdf2Sync(password, keyCode, loopCount, charsCount, encType) // return BufferType --SYNC
    return encode.toString('hex')
}



