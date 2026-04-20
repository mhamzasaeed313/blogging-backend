const express = require('express');
const { Create, DeleteBlog, GetPosts, update } = require('../controller/blog.controller');
const { upload } = require('../middleware/Multer');
const { isAdmin } = require('../middleware/CheckAdmin');

const BlogRoutes = express.Router();

BlogRoutes.post('/create', isAdmin, upload.single('postimg'), Create);
BlogRoutes.patch('/update/:id', isAdmin, upload.single('postimg'), update);
BlogRoutes.get('/GetPosts', GetPosts);
BlogRoutes.delete('/delete/:id', DeleteBlog);

module.exports = BlogRoutes;