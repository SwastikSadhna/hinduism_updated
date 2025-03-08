const GranthModel = require("../model/granthitemmodel")

const getGranthItems = async (req, res) => {
    try { 
        const id = req.params.id
        const items = await GranthModel.getGranthItems(id)
        if (items.length > 0)
            res.status(200).json(items)
        else
            res.status(404).json({ message: "No items found" })
    }
    catch (err) {
        res.status(500).json({ message: "Error occurred while retrieving items", error: err })
    }
}

const geTAllGranthItems = async (req, res) => {
    try {
        const items = await GranthModel.geTAllGranthItems()
        if (items.length > 0) {
            res.status(200).json(items)
        }
        else {
            res.status(404).json({ message: "No items found" })
        }
    } catch (err) {
        res.status(500).json({ message: "Error occurred while retrieving items", error: err })
    }
}

const searchItem = async (req, res) => {
    try {
        const query = req.query.q;
        const result = await GranthModel.SearchGranthItem(query);
        if (result.length > 0)
            res.status(200).json(result)
        else
            res.status(404).json({ message: "No items found for "+query })
    } catch (err) {
        res.status(500).json({ message: `Error occurred while searching items query`, error: err })
    }
}

const addGranthItem = async(req, res) => {
    try {
        const data = {
            title: req.body?.title || '',
            description: req.body?.description || '',
            image: '',
            link: req.body?.link || '',
            granth_id: req.body?.granth_id || '',
            author: req.body?.author || '',
            year: req.body?.year || '',
        }

        console.log(data)

        if(data.name != "" && data.description != "") {
            const result = await GranthModel.addGranthItem({...data});
            // console.log(result);
            res.status(200).json(result[0]);
        } else {
            res.status(400).json({message: "granthItem data not found"});
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "something gone wrong", error: error});
    }
}

const updateGranthItem = async(req, res) => {
    try {
        const data = {
            id: req.params.id,
            title: req.body?.title,
            description: req.body?.description || '',
            image: '',
            link: req.body?.link || '',
            granth_id: req.body?.granth_id || '',
            author: req.body?.author || '',
        }

        if(data.name != "" && data.description != "") {
            const result = await GranthModel.updateGranthItem({...data});
            res.status(200).json(result[0]);
        } else {
            res.status(400).json({message: "granthItem data not found"});
        }
    } catch(error) {
        res.status(500).json({message: "something gone wrong"});
    }
}

const deleteGranthItem = async(req, res) => {
    try {
        const result = await GranthModel.deleteGranthItem(req.params.id);
        res.status(200).json({message: "granthItem deleted successfully"});
    } catch(error) {
        res.status(500).json({message: "something gone wrong"});
    }
}

module.exports = {searchItem, getGranthItems, geTAllGranthItems, addGranthItem, updateGranthItem, deleteGranthItem};