const fs = require('fs')

function allPosts(req, res, next){
    const data = fs.readFileSync('./db/posts.json')
    const posts = JSON.parse(data)
    res.locals.posts = posts
    next()
}

module.exports = allPosts