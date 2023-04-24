const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get posts
router.get('/', (req, res) => {
    res.send('Hello');
});

// Add posts


// Delete posts



module.exports = router;