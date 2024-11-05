// Create a web server using express and router to handle comments

// Import the express module
const express = require('express');

// Create a new express application
const app = express();

const comments = [
    { id: 1, author: 'John Doe', body: 'Hello, World!' },
    { id: 2, author: 'Jane Doe', body: 'Hi, there!' },
  ];

// Use the comments router
app.use('/comments', comments );

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});