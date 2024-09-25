function checkPosts(req, res, next){
    const body = req.body
    if("body" in body && "title" in body && "userId" in body){
        let post = {
            userId : body.userId,
            id: Math.round(Math.random() * 10000),
            title: body.title,
            body: body.body
        }
        console.log(post)
        res.locals.post = post
        next()
    } else {
        res.status(400).json({'msg' : 'Invalid data'})
    }
}

module.exports = checkPosts