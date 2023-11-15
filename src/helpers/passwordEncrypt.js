"use strict";

/* ------------------ PASSWORD ENCRYPT -------------------- */

const crypto = require('node:crypto') // crypto modülü node.js ile direkt yüklendiği için "node:crypto" şeklinde require edilir.

const keyCode = process.env.SECRET_KEY || 'write_random_chars_to_here'
const loopcount = 10_000
const charsCount = 32 //write 32 for 64
const encType = 'sha512'

module.exports = function (password) {
    const encode = crypto.pbkdf2Sync(password, keyCode, loopcount, charsCount, encType)
    return encode.toString('hex')
}