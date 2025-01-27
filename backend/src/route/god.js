const router = require('express').Router();

const god = require('../controller/godcontroller');

router.get('/', god.GetAllGod);
router.get('/keywords', god.GodKeywords);
router.get('/search', god.SearchGod);
router.get('/trimurti', god.GetTrimurty);
router.get('/:id', god.GetGodById);

module.exports = router;