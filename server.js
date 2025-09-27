const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load biến môi trường từ file .env
dotenv.config();

const app = express();
app.use(express.json());

// Kết nối MongoDB
connectDB();

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server chạy trên cổng ${PORT}`));
