const router = require('express').Router();
const {verifyToken, checkPermission} = require("../middleware/authentication")
const {upload} = require("../middleware/fileupload")
const god = require('../controller/godcontroller');

router.get('/', god.GetAllGod);
router.get('/keywords', god.GodKeywords);
router.get('/search', god.SearchGod);
router.get('/trimurti', god.GetTrimurty);
router.get('/:id', god.GetGodById);
router.post('/', verifyToken, checkPermission("create","god"), upload.single('image'),god.addGod);
router.put('/:id', verifyToken, checkPermission("update","god"), upload.single('image'), god.updateGod);
router.delete('/:id', verifyToken, checkPermission("delete","god"), god.deleteGod);

module.exports = router;