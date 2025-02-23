const godmodel = require('../model/godmodel');

const GetAllGod = async (req, res) => {
    try {
        const god = await godmodel.GetAllGod();

        if (god.length > 0) {
            res.status(200).json(god);
        } else {
            res.status(404).json({ message: 'No Gods found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'something gone wrong', error: error });
    }
}

const GetGodById = async (req, res) => {
    try {
        const god = await godmodel.GetGodById(req.params.id);

        if (god.length > 0) {
            res.status(200).json(god);
        } else {
            res.status(404).json({ message: 'God not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'something gone wrong', error: error });
    }
}

const GodKeywords = async (req, res) => {
    try {
        const god = await godmodel.GodKeywords();

        if (god.length > 0) {
            res.status(200).json(god)
        } else {
            res.status(404).json({ message: 'no keyword available' })
        }
    } catch (error) {
        res.status(500).json({ message: 'something gone wrong', error: error })
    }
}

const SearchGod = async (req, res) => {
    try {
        const query = req.query.q;
        const god = await godmodel.SearchGod(query);

        if (god.length > 0) {
            res.status(200).json(god);
        } else {
            res.status(404).json({ message: 'No Search God found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something gone wrong', error: error })
    }
}

const GetTrimurty = async (req, res) => {
    try {
        const god = await godmodel.GetTrimurty();

        if (god.length > 0) {
            res.status(200).json(god);
        } else {
            res.status(404).json({ message: 'Trimurty not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'something gone wrong', error: error });
    }
}

const addGod = async (req, res) => {
    const data = {
        name: req.body.name,
        description: req.body?.description || "",
        image: req.body?.image || "",
        keyword: req.body?.keyword || [],
    }
    console.log(data)

    try {

        console.log(data.name)
        if (data.name != "" && data.description != "") {
            console.log(data.name)
            const god = await godmodel.addGod(data);
            res.status(200).json(god[0]);
        } else {
            res.status(404).json({ message: "god not added" });
        }
    } catch (error) {
        res.status(500).json({ error: error, message: 'something gone wrong' });
    }
}

const updateGod = async (req, res) => {
    const data = {
        id: req.params.id,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        keyword: req.body.keyword || [],
    }
    console.log(data)


    try {
        if (data.name != "" && data.description != "") {
            const god = await godmodel.updateGod(data);
            res.status(200).json(god[0]);
        } else {
            res.status(404).json({ message: "god not added" });
        }
    } catch (error) {
        res.status(500).json({ error: error, message: 'something gone wrong' });
    }
}

const deleteGod = async (req, res) => {
    try {
        const god = await godmodel.deleteGod(req.params.id);
        res.status(200).json({ message: "God deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error, message: "Some internal problems occured" })
    }
}

module.exports = { GetAllGod, GetGodById, GodKeywords, SearchGod, GetTrimurty, addGod, updateGod, deleteGod };