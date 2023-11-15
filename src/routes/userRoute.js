"use strict";

/* ------------------ USER ROUTE -------------------- */

const router = require('express').Router()

const { User } = require('../controllers/userController');
const { BlogPost } = require('../controllers/blogController');

//! Login:
// router.post('/login', User.login)
router.route('/login')
    .post(User.login)

//! Logout:
router.all('/logout', User.logout)

router.route('/')
    .get(User.list)
    .post(User.create)

router.route('/:userId')
    .get(User.read)
    .put(User.update)
    .delete(User.delete)

router.get('/:userId/posts', BlogPost.listInPost)

module.exports = router