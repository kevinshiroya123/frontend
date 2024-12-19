const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Import database connection
const heroRoutes = require('./routes/heroRoutes'); // Import hero routes

const apiRoutes = require('./routes/api'); // Import other API routes

dotenv.config(); // Load environment variables
const path = require('path');


// Initialize Express app
const app = express();

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Allow large JSON payloads
app.use(express.urlencoded({ limit: '50mb', extended: true })); // Allow large form-data payloads



// API Routes
app.use('/api/hero', heroRoutes); // Hero routes for home data
app.use('/api', apiRoutes); // Additional API routes


// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An unexpected error occurred.', error: err.message });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
