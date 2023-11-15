"use strict";

/* ------------------ BLOG ROUTE -------------------- */

const router = require('express').Router()

const { BlogPost, BlogCategory } = require('../controllers/blogController')

//! Blog Category Route
router.route('/category')
    .get(BlogCategory.list)
    .post(BlogCategory.create)
router.route('/category/:categoryId')
    .get(BlogCategory.read)
    .put(BlogCategory.update)
    .delete(BlogCategory.delete)

//! Blog Post Route
router.route('/post')
    .get(BlogPost.list)
    .post(BlogPost.create)
router.route('/post/:postId')
    .get(BlogPost.read)
    .put(BlogPost.update)
    .delete(BlogPost.delete)

router.get('/category/:categoryId/posts', BlogPost.listInCategory)


module.exports = router