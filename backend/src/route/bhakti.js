const router = require('express').Router();
const bhakti = require('../controller/bhakticontroller');
const {verifyToken, checkPermission} = require("../middleware/authentication")

router.get('/', bhakti.GetAllBhakti);
router.get('/type/:id',  bhakti.BhaktiByType);
router.get('/categories',  bhakti.getAllCategories);
router.get('/filter/options', bhakti.BhaktiKeywords);
router.get('/filter', bhakti.FilterBhakti);
router.get('/:id', bhakti.GetBhaktiById);
router.post('/', verifyToken, checkPermission("create","bhakti"), bhakti.AddBhakti);
router.delete("/:id", verifyToken, checkPermission("delete","bhakti"), bhakti.DeleteBhakti)
router.put("/:id", verifyToken, checkPermission("update","bhakti"), bhakti.UpdateBhakti)

module.exports = router;