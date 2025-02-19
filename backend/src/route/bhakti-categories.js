const router = require('express').Router();
const bhakti = require('../controller/bhakticontroller');
const {verifyToken, checkPermission} = require("../middleware/authentication")

//category routes
router.get('/',  bhakti.getAllCategories);
router.get('/:id', bhakti.getCategoryById);
router.post('/', bhakti.addCategory);
router.put('/:id', bhakti.updateCategory);
router.delete('/:id', bhakti.deleteCategory);


module.exports = router;