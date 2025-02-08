const router = require('express').Router();
const bhakti = require('../controller/bhakticontroller');

router.get('/', bhakti.GetAllBhakti);
router.get('/type/:id', bhakti.BhaktiByType);
router.get('/categories', bhakti.getAllCategories);
router.get('/filter/options', bhakti.BhaktiKeywords);
router.get('/filter', bhakti.FilterBhakti);
router.get('/:id', bhakti.GetBhaktiById);
router.post('/', bhakti.AddBhakti);
router.delete("/:id", bhakti.DeleteBhakti)

module.exports = router;