/*
============================================
; Title:  api-catalog.js
; Author: Wendy Portillo
; Date:   25 October 2019
; Description: Hosts HTTP request routes.
;===========================================
*/

/**
* API Routes
*/
var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');
// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);
// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);
module.exports = router;