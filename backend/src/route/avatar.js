const router = require('express').Router();
const {verifyToken, checkPermission} = require("../middleware/authentication")
const {upload} = require("../middleware/fileupload")
const avatar = require('../controller/avatarcontroller');

router.get('/', avatar.GetAllAvatars);
router.get('/search', avatar.SearchAvatar);
router.get('/god', avatar.GetGodByRef);
router.get('/:id', avatar.GetAvatarById);
router.post('/', verifyToken, checkPermission("create","avatar"), upload.single('image'), avatar.addAvatar);
router.delete('/:id', avatar.deleteAvatar);
router.put('/:id', verifyToken, checkPermission("update","avatar"), upload.single('image'), avatar.updateAvatar);
            
module.exports = router;