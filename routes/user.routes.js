const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const upload = require('../config/multer');

// Home route
router.get('/', userController.getHomePage);

// Form submission route
router.post('/submit', upload.single('resume'), userController.submitForm);

module.exports = router;
