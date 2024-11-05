// Create web server

// Create web server for comment
// =============================

// Import the express module
const express = require('express');

// Create a new express application
const router = express.Router();

const comments = [
    { id: 1, author: 'John Doe', body: 'Hello, World!' },
    { id: 2, author: 'Jane Doe', body: 'Hi, there!' },
  ];

// Use the comments router
router.get('/', (req, res) => {
    res.json(comments);
  } );

// Start the server
router.listen(3000, () => {
  console.log('Server is listening on port 3000');
});