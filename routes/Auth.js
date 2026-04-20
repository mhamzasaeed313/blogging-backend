const express = require('express');
const { Register, Login, Logout, updateProfile } = require('../controller/auth.controller');
const { upload } = require('../middleware/Multer');
const { isLogin } = require('../middleware/CheckAdmin');

const AuthRoutes = express.Router();

AuthRoutes.post('/register', upload.single('profile'), Register);
AuthRoutes.post('/login', Login);
AuthRoutes.post('/logout', Logout);
AuthRoutes.patch('/profile/:id', isLogin, upload.single('profile'), updateProfile);   // removed extra upload if not needed

module.exports = AuthRoutes;