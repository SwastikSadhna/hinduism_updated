const Temple = require("../model/templeModel")

const getAllTemples = async (req, res) => {
    try { 
        const temples = await Temple.getAllTemples()
        if (temples)
            res.status(200).json({ message: "Temples retrieved successfully", count: temples.length, data: temples })
        else
            res.status(404).json({ message: "No temples found" })
    }
    catch (err) {
        res.status(500).json({ message: "Error occurred while retrieving temples", error: err })
    }
}

module.exports = {getAllTemples}