const router = require('express').Router();
const bhakti = require('../controller/bhakticontroller');

router.get('/all', bhakti.GetAllBhakti);
router.get('/id/:bhaktiid', bhakti.GetBhaktiById);
router.get('/type/:id', bhakti.BhaktiByType);

module.exports = router;