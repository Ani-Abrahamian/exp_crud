function post(req, res, next){
    const postId = req.params.id
    const {posts} = res.locals
    const index = posts.findIndex(p => p.id === +postId)

    if(index !== -1){
        res.locals.singlePost = posts[index]
        res.locals.index = index
        next()
    }else {
        res.status(400).json({'msg' : 'Invalid data'})
    }
}

module.exports = post