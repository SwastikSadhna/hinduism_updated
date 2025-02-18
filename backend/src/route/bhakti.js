const router = require('express').Router();
const bhakti = require('../controller/bhakticontroller');
const {verifyToken, checkPermission} = require("../middleware/authentication")

router.get('/', bhakti.GetAllBhakti);
router.get('/type/:id',  bhakti.BhaktiByType);
router.get('/filter/options', bhakti.BhaktiKeywords);
router.get('/filter', bhakti.FilterBhakti);
router.get('/:id', bhakti.GetBhaktiById);
router.post('/', verifyToken, checkPermission("create","bhakti"), bhakti.AddBhakti);
router.delete("/:id", verifyToken, checkPermission("delete","bhakti"), bhakti.DeleteBhakti)
router.put("/:id", verifyToken, checkPermission("update","bhakti"), bhakti.UpdateBhakti)

//category routes
router.get('/categories',  bhakti.getAllCategories);
router.get('/categories/:id', bhakti.getCategoryById);
router.post('/categories', bhakti.addCategory);
router.put('/categories/:id', bhakti.updateCategory);
router.delete('/categories/:id', bhakti.deleteCategory);

module.exports = router;