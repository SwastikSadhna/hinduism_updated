const router = require('express').Router();

const TempController = require('../controller/temp');

router.get('/', TempController.Controller1);

module.exports = router;