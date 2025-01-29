const godmodel = require('../model/godmodel');

const GetAllGod = async (req, res) => {
    try {
        const god  = await godmodel.GetAllGod();

        if(god.length > 0) {
            res.status(200).json(god);
        } else {
            res.status(404).json({message: 'No Gods found'});
        }
    } catch(error) {
        res.status(500).json({message: 'something gone wrong', error: error});
    }
}

const GetGodById = async (req, res) => {
    try {
        const god = await godmodel.GetGodById(req.params.id);

        if(god.length > 0) {
            res.status(200).json(god);
        } else {
            res.status(404).json({message: 'God not found'});
        }
    } catch(error) {
        res.status(500).json({message: 'something gone wrong', error: error});
    }
}

const GodKeywords = async (req, res) => {
    try {
        const god = await godmodel.GodKeywords();

        if(god.length > 0) {
            res.status(200).json(god)
        } else {
            res.status(404).json({ message: 'no keyword available' })
        }
    } catch(error) {
        res.status(500).json({ message: 'something gone wrong', error: error })
    }
}

const SearchGod = async (req, res) => {
    try {
        const query = req.query.q;
        const god = await godmodel.SearchGod(query);

        if(god.length > 0) {
            res.status(200).json(god);
        } else {
            res.status(404).json({message: 'No Search God found'});
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({message: 'something gone wrong', error: error})
    }
}

const GetTrimurty = async (req, res) => {
    try {
        const god = await godmodel.GetTrimurty();

        if(god.length > 0) {
            res.status(200).json(god);
        } else {
            res.status(404).json({message: 'Trimurty not found'});
        }
    } catch(error) {
        res.status(500).json({message: 'something gone wrong', error: error});
    }
}

module.exports = { GetAllGod, GetGodById, GodKeywords, SearchGod, GetTrimurty };