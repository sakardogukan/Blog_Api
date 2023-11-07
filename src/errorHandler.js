"use strict"

const { Error } = require("mongoose");

/* ------------ ERROR HANDLER ------------ */


module.exports = (err, req, res, next) => {

    const errorStatusCode = res.errorStatusCode || 500
    console.log('error handler runned');
    res.status(errorStatusCode).send({
        error: true,
        message: err.message,
        cause: err,
        body: req.body
    })
}