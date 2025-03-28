const express = require('express');
const router = express.Router();
const path = require('path');

// Route for the home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Route for the about page
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html'));
});

module.exports = router;