// server.js
const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware to parse JSON
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:'16kb'}));
app.use('/uploads', express.static('uploads'));

// Routes
app.get('/', (req , res) => {
  res.json("API Running ...");
});
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/attendance', attendanceRoutes);

// Listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

