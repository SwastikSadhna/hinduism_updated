const GranthModel = require("../model/granthitemmodel")

const getGranthItems = async (req, res) => {
    try { 
        const id = req.params.id
        const items = await GranthModel.getGranthItems(id)
        if (items.length > 0)
            res.status(200).json({ message: "Granthitems retrieved successfully", count: items.length, data: items })
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

module.exports = {searchItem, getGranthItems, geTAllGranthItems};