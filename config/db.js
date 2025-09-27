const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        console.log("👉 Đang kết nối tới:", process.env.MONGO_URI);
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`✅ Kết nối MongoDB thành công: ${conn.connection.host}`);
    } catch (err) {
        console.error("❌ Kết nối MongoDB thất bại:", err);
        process.exit(1);
    }
};

module.exports = connectDB;
