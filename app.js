const express = require('express');
const cors  = require('cors')
const cookieParser = require('cookie-parser');
const AuthRoutes = require('./routes/Auth')
const BlogRoutes = require('./routes/Blogs')
const DashboardRoutes = require('./routes/Dashboard')
const CommentRoutes = require('./routes/Comments')
const PublicRoutes = require('./routes/Public')

const app = express()
app.use(express.static('public'))
app.use(cookieParser())
const corsOptoins={
    origin:true,
    credentials:true
}
app.use(cors(corsOptoins))
app.use('/auth',AuthRoutes)
app.use('/blog',BlogRoutes)
app.use('/dashboard',DashboardRoutes)
app.use('/comment',CommentRoutes)
app.use('/public',PublicRoutes)

module.exports = app;