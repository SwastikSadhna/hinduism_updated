const {Router} = require('express');
const router = Router();

const TempController = require('../controller/temp');

router.get('/', TempController.Controller1);

module.exports = router;