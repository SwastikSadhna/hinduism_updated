const router = require('express').Router();

const avatar = require('../controller/avatarcontroller');

router.get('/all', avatar.GetAllAvatars);
router.get('/id/:avatarid', avatar.GetAvatarById);
router.get('/search', avatar.SearchAvatar);
router.get('/god', avatar.GetGodByRef);
            
module.exports = router;