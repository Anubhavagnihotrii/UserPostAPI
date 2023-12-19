const express = require('express')
const router = express.Router()

const isLoggedIn = require('../middlewares/isLoggedIn')
const { createPost, updatePost, deletePost, getAllPost } = require('../controllers/postController')

router.route('/post/create').post(isLoggedIn, createPost)
router.route('/post/delete/:id').delete(isLoggedIn,deletePost)
router.route('/post/getAll').get(getAllPost)
router.route('/post/update/:id').put(isLoggedIn,updatePost)

module.exports = router