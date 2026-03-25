const User = require('../model/user');
const path = require('path');

// @desc    Get home page / application form
// @route   GET /
// @access  Public
exports.getHomePage = (req, res) => {
    res.render('index', { 
        title: 'Apply Now | Modern Application Form',
        success: null,
        error: null 
    });
};

// @desc    Submit application form
// @route   POST /submit
// @access  Public
exports.submitForm = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ 
                success: false, 
                message: 'No resume file uploaded' 
            });
        }

        const { name, email, degree, phone } = req.body;
        
        // Save user to database
        const newUser = await User.create({
            name,
            email,
            degree,
            phone,
            resume: req.file.path
        });

        // If it's an AJAX request, return JSON
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            return res.status(201).json({ 
                success: true, 
                message: 'Your application has been received!', 
                data: newUser 
            });
        }

        // For traditional form submission, render back with success
        res.render('index', {
            title: 'Success | Modern Application Form',
            success: 'Thank you! Your application has been submitted successfully.',
            error: null
        });

    } catch (err) {
        console.error(err);
        
        // If it's an AJAX request, return JSON
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            return res.status(400).json({ 
                success: false, 
                message: err.message 
            });
        }

        res.render('index', {
            title: 'Error | Modern Application Form',
            success: null,
            error: err.message
        });
    }
};
