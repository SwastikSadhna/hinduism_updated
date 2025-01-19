const granthModel = require("../model/granthmodel")


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
        if (result.length > 0)
            res.status(200).json(result)
        else
            res.status(404).json({ message: "No granth found" })
    } catch (err) {
        res.status(500).json({ message: "Error in fetching granth" })
    }
}

module.exports = {getAllGranth, getGranthDetails}

