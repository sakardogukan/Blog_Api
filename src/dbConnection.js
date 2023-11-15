"use strict"

/* ------------------DB CONNECTION-------------------- */

const mongoose = require("mongoose");

// const MONGODB = (process.env.MONGODB || 'mongodb://localhost:27017/blog_api_app')

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("* DB Conneted *"))
  .catch((err) => console.log("* DB NOT Conneted *", err))