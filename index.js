const express = require('express')
const app = express()
const mainRouter = require('./routes/index.js')
const postsRouter = require('./routes/posts.js')

let port = 3003

app.use(express.json())
app.use('/', mainRouter)
app.use('/posts', postsRouter)
app.use((req, res, next) => {
    res.status(400).json({'msg': 'invalid url address'})
}) 

app.listen(port, () => "server is running")

