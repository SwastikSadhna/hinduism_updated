const granthModel = require("../model/granthModel")
const {getGranthItems} = require("../model/granthitemmodel")

const getAllGranth = async (req, res) => {
    try {
        const result = await granthModel.getAllGranth()
        if (result.length > 0)
            res.status(200).json(result)
        else
            res.status(404).json({ message: "No granth found" })
    }
    catch (err) {
        res.status(500).json({ message: "Error in fetching granth" })
    }
}

const getGranthDetails = async (req, res) => {
    try {
        const id = req.params.id
        const result = await granthModel.getGranthDetails(id);
        if (result.length > 0) {
            const items = await getGranthItems(id);
            res.status(200).json({granth:result[0], items: items})
        }
        else
            res.status(404).json({ message: "No granth found" })
    } catch (err) {
        res.status(500).json({ message: "Error in fetching granth" })
    }
}

module.exports = {getAllGranth, getGranthDetails}

