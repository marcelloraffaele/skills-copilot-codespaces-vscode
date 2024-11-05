// Create a web server using express and router to handle comments
const express = require('express');
const router = express.Router();

// GET /comments - respond with a list of comments
router.get('/', (req, res) => {
    res.send('GET /comments - respond with a list of comments');
});

// POST /comments - respond with a message that the comment was added
router.post('/', (req, res) => {
    res.send('POST /comments - respond with a message that the comment was added');
});

// GET /comments/:id - respond with a message that the comment with ID was added
router.get('/:id', (req, res) => {
    res.send('GET /comments/:id - respond with a message that the comment with ID was added');
});

// PUT /comments/:id - respond with a message that the comment with ID was updated
router.put('/:id', (req, res) => {
    res.send('PUT /comments/:id - respond with a message that the comment with ID was updated');
});

// DELETE /comments/:id - respond with a message that the comment with ID was deleted
router.delete('/:id', (req, res) => {
    res.send('DELETE /comments/:id - respond with a message that the comment with ID was deleted');
});

module.exports = router;
