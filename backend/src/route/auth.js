const AuthController = require('../controller/authcontroller');
const express = require('express');
const router = express.Router();

router.post('/login', AuthController.login);
router.post('/signup', AuthController.register);

module.exports = router;
