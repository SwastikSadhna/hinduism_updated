const router = require('express').Router();
const bhakti = require('../controller/bhakticontroller');
const {verifyToken, checkPermission} = require("../middleware/authentication")
const {upload} = require("../middleware/fileupload")

//category routes
router.get('/',  bhakti.getAllCategories);
router.get('/:id', bhakti.getCategoryById);
router.post('/', verifyToken, checkPermission("create","bhakti-category"), upload.single('image'), bhakti.addCategory);
router.put('/:id', verifyToken, checkPermission("update","bhakti-category"), upload.single('image'), bhakti.updateCategory);
router.delete('/:id', verifyToken, checkPermission("delete","bhakti-category"), upload.single('image'), bhakti.deleteCategory);


module.exports = router;