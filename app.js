const express = require('express');
const app = express();
const port = 3000;

// Import routes
const todoRoutes = require('./routes/todoRoutes');

// Middleware parse JSON
app.use(express.json());

// Mount routes
app.use('/api/todos', todoRoutes);

app.listen(port, () => {
    console.log(`✅ Server đang chạy tại http://localhost:${port}`);
});
