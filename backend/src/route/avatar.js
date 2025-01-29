const router = require('express').Router();

const avatar = require('../controller/avatarcontroller');

router.get('/', avatar.GetAllAvatars);
router.get('/search', avatar.SearchAvatar);
router.get('/god', avatar.GetGodByRef);
router.get('/:id', avatar.GetAvatarById);
            
module.exports = router;