const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.routes');

// Connect to Database
connectDB();

const app = express();

// Layout Middleware
app.use(expressLayouts);
app.set('layout', 'layout'); // Default layout.ejs in views

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Folders
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Routes
app.use('/', userRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).render('404', { title: '404 - Not Found' });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Modern Application running at http://localhost:${PORT}`);
});
