const AuthController = require('../controller/auth');
const express = require('express');
const router = express.Router();

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

module.exports = router;
