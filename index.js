const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

const db_connection = require('./config/db');
const AuthRoutes = require('./routes/Auth');
const BlogRoutes = require('./routes/Blogs');
const DashboardRoutes = require('./routes/Dashboard');
const CommentRoutes = require('./routes/Comments');
const PublicRoutes = require('./routes/Public');

const app = express();

// Important: These middlewares must come BEFORE routes
app.use(express.json());           // ← Add this (very important for POST requests)
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));   // for serving uploaded images
app.use(cookieParser());


app.use(cors({
  origin: 'https://blogging-frontend-one.vercel.app', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // Allow cookies if needed
}));

// Routes
app.use('/auth', AuthRoutes);
app.use('/blog', BlogRoutes);
app.use('/dashboard', DashboardRoutes);
app.use('/comment', CommentRoutes);
app.use('/public', PublicRoutes);

// 404 Handler (optional but helpful)
app.use((req, res) => {
    res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

const PORT = process.env.PORT || 8001;

db_connection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error("Database connection failed", err));