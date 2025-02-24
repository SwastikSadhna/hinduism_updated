const AvatarModel = require('../model/avatarmodel');
const toArray = require("../middleware/toArray")

const GetAllAvatars = async (req, res) => {
    try {
        const avatar = await AvatarModel.GetAllAvatars();

        if (avatar.length > 0) {
            res.status(200).json(avatar);
        } else {
            res.status(404).json({ message: "avatar data not availabe" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something gone wrong", error: error });
    }
}

const GetAvatarById = async (req, res) => {
    try {
        const avatar = await AvatarModel.GetAvatarById(req.params.id);

        if (avatar.length > 0) {
            res.status(200).json(avatar);
        } else {
            res.status(404).json({ message: "avatar data not availabe" });
        }
    } catch (error) {
        res.status(500).json({ message: "somethin gone wrong", error: error })
    }
}

const GetGodByRef = async (req, res) => {
    try {
        const avatar = await AvatarModel.GetGodByRef();

        if (avatar.length > 0) {
            res.status(200).json(avatar);
        } else {
            res.status(404).json({ message: "god data not availabe" });
        }
    } catch (error) {
        res.status(500).json({ message: "somethin gone wrong", error: error });
    }
}

const SearchAvatar = async (req, res) => {
    try {
        const query = req.query.q;
        const avatar = await AvatarModel.SearchAvatar(query);
        console.log(avatar);

        if (avatar.length > 0) {
            res.status(200).json(avatar);
        } else {
            res.status(404).json({ message: "avatar data not availabe for these search : " + query });
        }
    } catch (error) {
        res.status(500).json({ message: "something gone wrong", error: error });
    }
}

const addAvatar = async (req, res) => {
    const data = {
        name: req.body.name,
        image: req.body?.image || "",
        yuga: req.body?.yuga || "",
        book: req.body?.book || "",
        description: req.body?.description || "",
        festivals: toArray(req.body?.festivals) || [],
        temples: toArray(req.body?.temples) || [],
        god_ref: req.body?.god_ref || "",
        sloka: toArray(req.body?.sloka) || [],
        reference_links: toArray(req.body?.reference_links) || [],
    }

    try {
        if (data.name != "" && data.yuga != "" && data.description != "", data.god_ref != "") {
            const avatar = await AvatarModel.AddAvatar({ ...data });
            req.status(200).json(avatar[0]);
        } else {
            return res.status(400).json({ error: "tample data not found" });
        }
    } catch (e) {
        res.status(500).json({ error: e, message: "somethin gone wrong" });
    }
}

const updateAvatar = async (req, res) => {
    const data = {
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        yuga: req.body.yuga,
        book: req.body.book,
        description: req.body.description,
        festivals: toArray(req.body.festivals),
        temples: toArray(req.body.temples),
        god_ref: req.body.god_ref,
        sloka: toArray(req.body.sloka),
        reference_links: toArray(req.body.reference_links),
    }

    try {
        if (data.name != "" && data.yuga != "" && data.description != "", data.god_ref != "") {
            const avatar = await AvatarModel.UpdateAvatar({ ...data });
            req.status(200).json(avatar[0]);
        } else {
            return res.status(400).json({ error: "all fields required!" });
        }
    } catch (e) {
        res.status(500).json({ error: e, message: "somethin gone wrong" });
    }
}

const deleteAvatar = async (req,res)=>{
    try{
        const avatar = await AvatarModel.DeleteAvatar(req.params.id);
        res.status(200).json({message: "avatar deleted successfully"});
    }catch(e){
        console.log(e);
        res.status(500).json({error: e, message: "Some internal problems occured"})
    }
}

module.exports = { GetAllAvatars, GetAvatarById, GetGodByRef, SearchAvatar, addAvatar, updateAvatar, deleteAvatar };