const router = require('express').Router();
const bhakti = require('../controller/bhakticontroller');
const {verifyToken, checkPermission} = require("../middleware/authentication")

router.get('/', verifyToken, checkPermission("read","bhakti"), bhakti.GetAllBhakti);
router.get('/type/:id', verifyToken, checkPermission("read","bhakti"), bhakti.BhaktiByType);
router.get('/categories', verifyToken, checkPermission("read","bhakticategory"), bhakti.getAllCategories);
router.get('/filter/options', bhakti.BhaktiKeywords);
router.get('/filter', bhakti.FilterBhakti);
router.get('/:id', verifyToken, checkPermission("read","bhakti"), bhakti.GetBhaktiById);
router.post('/', verifyToken, checkPermission("create","bhakti"), bhakti.AddBhakti);
router.delete("/:id", verifyToken, checkPermission("delete","bhakti"), bhakti.DeleteBhakti)
router.put("/:id", verifyToken, checkPermission("update","bhakti"), bhakti.UpdateBhakti)

module.exports = router;