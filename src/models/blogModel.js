"use strict";

/* ------------------ BLOG MODEL -------------------- */

const mongoose = require("mongoose");

/* --------------------- *
const nameSchema = new mongoose.Schema(
  { 
    /* _id : AUTO CREATED. "_" : diğer yazılımcılar için dokunma anlamındadır.
    
    /* fieldName: String //Shorthand Using
    
    fieldName: { 
      type: String, // veri tipi
      default: null, // default bir değer atayabiliriz
      trim: true, // gelen veriyi trim'den geçir. (trim:data)
      select: true, //Show/unshow
      index: false, // daha hızlı erişim olsun mu?
      unique: false, // benzersiz kayıt olsun mu?
      required: [true, "Error-Message"], // JSON data içinde gelmesi zorunlu mu?
      enum: [[0, 1, 2, 3], "Error-Message"], // Pattern/Constraint/Limit/Choices
      validate: [function (data) {return true}, "Error-Message"], // veriyi filtreden geçirecek fonksiyon
      get: function (data) {return true}, // veri çağırırken çalıştırılacak fonksiyon
      set: function (data) {return true}, //veri kaydederken çalıştırarak fonksiyon
    },
  },
  {
    collection: 'collectionName', // tablo ismi ne olsun?
    timestamps: true, // Create and Manage 'createdAt' and 'updatedAt'
  }
);

/* --------------------- */

//! blogCategory Schema Created
const blogCategoryShema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  }
},
  {
    collection: 'blogCategories',
    timestamps: true
  })




//! blogPost Model Created

const blogPostShema = new mongoose.Schema({

  //_id: Auto created

  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },  
  blogCategoryId: {
    type: mongoose.Schema.ObjectId,
    ref: 'BlogCategory',
    required: true
  },
  title: {
    type: String,
    trim: true,
    required: true
  },
  content: {
    type: String,
    trim: true,
    required: true
  },
  published: {
    type: Boolean,
    default: true
  }

}, {
  collection: 'blogPosts',
  timestamps: true
})

module.exports = {
  BlogCategory: mongoose.model('BlogCategory', blogCategoryShema),
  BlogPost: mongoose.model('BlogPost', blogPostShema)
}