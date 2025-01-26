const router = require('express').Router();

const avatar = require('../controller/avatarcontroller');

router.get('/', avatar.GetAllAvatars);
router.get('/:id', avatar.GetAvatarById);
router.get('/search', avatar.SearchAvatar);
router.get('/god', avatar.GetGodByRef);
            
module.exports = router;