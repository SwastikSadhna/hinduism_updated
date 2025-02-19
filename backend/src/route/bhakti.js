const router = require('express').Router();
const bhakti = require('../controller/bhakticontroller');
const {verifyToken, checkPermission} = require("../middleware/authentication")
const {upload} = require("../middleware/fileupload")

router.get('/', bhakti.GetAllBhakti);
router.get('/type/:id',  bhakti.BhaktiByType);
router.get('/filter/options', bhakti.BhaktiKeywords);
router.get('/filter', bhakti.FilterBhakti);
router.get('/:id', bhakti.GetBhaktiById);
router.post('/', verifyToken, checkPermission("create","bhakti"), upload.single('image'), bhakti.AddBhakti);
router.delete("/:id", verifyToken, checkPermission("delete","bhakti"), bhakti.DeleteBhakti)
router.put("/:id", verifyToken, checkPermission("update","bhakti"), upload.single('image'), bhakti.UpdateBhakti)



module.exports = router;