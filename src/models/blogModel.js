"use strict"

/* ------------ Blog Model ------------ */

const mongoose = require('mongoose')

/* --------- MongoDB Schema Created --- *
const nameSchema = new mongoose.Schema({
    _id: // Auto Created
    fieldName: String, //alan adı
    default: null, // başlangıç değeri
    trim: true, // datanın sağ ve doldaki boşluklarını siler
    select: true, // kullanıcıya giden veriye izin verilip verilmemesini sağlar
    index: true, // Veri tabanına hızlı ulaşmak için kullanılır. index olan veri ram'de saklanır.
    unique: false, // Benzersiz kayıt olup olmadığı
    required: true, // JSON data içinde kullanılması zorunlu alan olup olmadığı
    required: [true, 'Error-Message'],
    enum: [[1, 2, 3], 'Error-Message'], //Pattern & Constraint. Veri kısıtlama - limit koyma
    validate: [function (data) { return true }, 'Error-Message'],
    get: function (data) { return true }, //veri çağırırken çalıştırılacak fonksiyon
    set: function (data) { return true }, //veri kaydederken çalıştırılacak fonksiyon
}, { 
    collection: 'nameSchemas', // tablo ismi ne olsun?
    timestamps: true // createdAt ve updatedAt için kullanılır.
})

/* ------------ ------- ------------ */

//! BlogCategory Schema
const blogCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'name field must be required.'],
        unique: true
    }
}, { collection: 'blogCategories', timestamps: true })


//! BlogPost Schema
const blogPostschema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.ObjectId, // Reletional ObjectId
        required: true,
        ref: 'User'
    },
        blogCategoryId: {
        type: mongoose.Schema.ObjectId, // Reletional ObjectId
        required: true,
        ref: 'BlogCategory'
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
    },
}, { collection: 'blogPosts', timestamps: true })

// const BlogPostModel = mongoose.model('BlogPost', blogPostschema)

module.exports = {
    BlogCategory: mongoose.model('BlogCategory', blogCategorySchema),
    BlogPost: mongoose.model('BlogPost', blogPostschema)
}