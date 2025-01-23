const { getFilterQuery } = require("../middleware/filterHelper")
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

const getTempleById = async (req, res) => {
    try {
        const id = req.params.id;
        const temple = await Temple.getTempleById(id);
        if (temple.length>0)
            res.status(200).json(temple)
        else
            res.status(404).json({ message: "Temple not found" })
    } catch (err) {
        res.status(500).json({ message: "Error occurred while retrieving temple by id", error: err })
    }
}

const searchTemple = async (req, res) => {
    try {
        const query = req.query.q;
        const result = await Temple.searchTemple(query);
        if (result.length > 0)
            res.status(200).json(result)
        else
            res.status(404).json({ message: "No temples found for "+query })
    } catch (err) {
        res.status(500).json({ message: `Error occurred while searching temple query`, error: err })
    }
}

const filterTemple = async (req, res) => {
    const filter = req.query;
    try {
        const query = getFilterQuery(filter);
        const result = await Temple.filterTemple(query)
        if (result.length > 0)
            res.status(200).json(result)
        else
            res.status(404).json({ message: "No temples found" })
    } catch (err) {
        res.status(500).json({message: "Error occurred while filtering temple" , error: err})
    }
}

const getChardhamTemples = async (req, res) => {
    try {
        const temples = await Temple.GetChardham();
        if (temples)
            res.status(200).json(temples)
        else
            res.status(404).json({ message: "No temples found" })
    } catch (err) {
        res.status(500).json({ message: "Error occurred while retrieving Chardham temples", error: err });
    }
}

module.exports = {getAllTemples, getTempleById, searchTemple, filterTemple, getChardhamTemples};