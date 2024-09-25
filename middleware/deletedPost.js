const fs = require('fs')

function deletedPost(req, res, next){
    const {posts} = res.locals
    const postId = req.params.id
    const index = posts.findIndex(p => p.id === +postId)

    if(index !== -1){
        const deletedPost = posts.splice(index, 1)
        res.locals.deletedPost = deletedPost[0]
        fs.writeFileSync('./db/posts.json', JSON.stringify(posts))
        next()
    }else {
        res.status(400).json({'msg' : 'Invalid data'})
    }
}

module.exports = deletedPost