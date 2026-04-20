const express = require('express');
const { GetSinglePost } = require('../controller/public.controller');

const PublicRoutes = express.Router();

PublicRoutes.get('/Singlepost/:id', GetSinglePost);

module.exports = PublicRoutes;