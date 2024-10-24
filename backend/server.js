// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize dotenv to read from the .env file
dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests (e.g., between frontend and backend)
app.use(express.json()); // Parse JSON requests

// Database connection
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGO_URI || 'your-mongodb-connection-string-here';

// Connect to MongoDB using Mongoose
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// Example route (can be replaced with your actual routes)
app.get('/', (req, res) => {
  res.send('API is running');
});

// Define your API routes (you can separate these into route files for larger apps)
const notesRoute = require('./routes/notesRoute'); // Example route file for Notes
app.use('/api/notes', notesRoute); // API route for notes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
