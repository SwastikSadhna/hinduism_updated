const router = require('express').Router();
const bhakti = require('../controller/bhakticontroller');

router.get('/', bhakti.GetAllBhakti);
router.get('/:id', bhakti.GetBhaktiById);
router.get('/type/:id', bhakti.BhaktiByType);
router.get('/categories', bhakti.getAllCategories);
router.get('/filter/options', bhakti.BhaktiKeywords);
router.get('/filter', bhakti.FilterBhakti);

module.exports = router;