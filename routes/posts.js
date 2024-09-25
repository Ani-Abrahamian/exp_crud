const express = require('express')
const router = express.Router()
const allPosts = require('../middleware/allPosts.js')
const singlePost = require('../middleware/post.js')
const checkPosts = require('../middleware/checkPosts.js')
const updatePost = require('../middleware/updatePost.js')
const deletedPost = require('../middleware/deletedPost.js')
const fs = require('fs')

router.get('/', allPosts, (req,res) => {
    const {posts} = res.locals
    res.status(200).json(posts)
})

router.get('/:id', [allPosts, singlePost], (req, res) => {
    const singlePost = res.locals.singlePost
    res.status(200).json(singlePost)
})

router.post('/', [checkPosts,allPosts], (req, res) => {
    const {post, posts} = res.locals
    posts.push(post)
    fs.writeFileSync('./db/posts.json', JSON.stringify(posts))
    res.status(201).json(post)
})

router.put('/:id', [allPosts, updatePost, checkPosts],(req, res) => {
    const {updatePost} = res.locals
    res.status(200).json(updatePost)
})

router.patch('/:id', [allPosts, updatePost], (req, res) => {
    const {updatePost} = res.locals
    res.status(200).json(updatePost)
})

router.delete('/:id', [allPosts, deletedPost], (req, res) =>  {
    const {deletedPost} = res.locals
    res.status(200).json(deletedPost)
})

module.exports = router