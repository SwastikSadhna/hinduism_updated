const router = require('express').Router();

const god = require('../controller/godcontroller');

router.get('/', god.GetAllGod);
router.get('/keywords', god.GodKeywords);
router.get('/:id', god.GetGodById);
router.get('/search', god.SearchGod);
router.get('/trimurti', god.GetTrimurty);

module.exports = router;