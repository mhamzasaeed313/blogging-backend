const express = require('express');
const { AddComment } = require('../controller/comment.controller');
const { isLogin } = require('../middleware/CheckAdmin');

const CommentRoutes = express.Router();

CommentRoutes.post('/addcomment', isLogin, AddComment);

module.exports = CommentRoutes;