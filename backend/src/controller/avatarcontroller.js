const AvatarModel = require('../model/avatarmodel');

const GetAllAvatars = async (req, res) => {
    try {
        const avatar = await AvatarModel.GetAllAvatars();

        if(avatar.length > 0) {
            res.status(200).json({message: "Avatars retrieved successfully", data: avatar});
        } else {
            res.status(404).json({message: "avatar data not availabe"});
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "something gone wrong", error: error});
    }
}

const GetAvatarById = async (req, res) => {
    try {
        const avatar = await AvatarModel.GetAvatarById(req.params.id);

        if(avatar.length > 0) {
            res.status(200).json({message: "avatar get successfully", data: avatar});
        } else {
            res.status(404).json({message: "avatar data not availabe"});
    }
} catch(error) {
    res.status(500).json({message: "somethin gone wrong", error: error})
}
}

const GetGodByRef = async (req, res) => {
    try {
        const avatar = await AvatarModel.GetGodByRef();

        if(avatar.length > 0) {
            res.status(200).json({message: "god get successfully from avatar", data: avatar});
        } else {
            res.status(404).json({message: "god data not availabe"});
        }
    } catch (error) {
        res.status(500).json({message: "somethin gone wrong", error: error});
    }
}

const SearchAvatar = async (req, res) => {
    try {
        const query = req.query.q;
        const avatar = await AvatarModel.SearchAvatar(query);
        console.log(avatar);

        if(avatar.length > 0) {
            res.status(200).json({message: "avatar search successfully", data: avatar});
        } else {
            res.status(404).json({message: "avatar data not availabe for these search : " + query});
        }
    } catch(error) {
        res.status(500).json({message: "something gone wrong", error: error});
    }
}

module.exports = { GetAllAvatars, GetAvatarById, GetGodByRef, SearchAvatar };