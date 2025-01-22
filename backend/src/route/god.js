const router = require('express').Router();

const god = require('../controller/godcontroller');

router.get('/all', god.GetAllGod);
router.get('/id/:godid', god.GetGodById);
router.get('/search', god.SearchGod);
router.get('/trimurti', god.GetTrimurty);

module.exports = router;