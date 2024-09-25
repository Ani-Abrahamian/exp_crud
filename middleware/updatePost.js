const fs = require('fs')

function updatePost(req, res, next) {
    const {posts} = res.locals
    const postId = req.params.id
    const body = req.body
    const index = posts.findIndex(p => p.id === +postId)

    if(index !== -1){
        posts[index] = {...posts[index], ...body}
        fs.writeFileSync('./db/posts.json', JSON.stringify(posts))
        res.locals.updatePost = posts[index]
        next()
    }else {
        res.status(400).json({'msg' : 'Invalid data'})
    }
}

module.exports = updatePost