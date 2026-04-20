const mongoose = require('mongoose');
const dotenv  = require('dotenv');

const db_connection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);

        console.log(`MongoDB connected successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

module.exports = db_connection;