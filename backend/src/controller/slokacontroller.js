const Sloka = require("../model/slokmodel")

const getAllSloka = async (req, res) => {
    try {
        const sloka = await Sloka.getAllSloka();
        if (sloka.length > 0)
            res.status(200).json(sloka);
        else
            res.status(404).json({ message: "No sloka found" });
    } catch (err) {
        res.status(500).json({ message: "Error fetching sloka" });
    }
}

const getSlokadetails = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Sloka.GetSlokaDetails(id);
        if (data.length > 0)
            res.status(200).json(data);
        else
            res.status(404).json({ message: "No sloka found" });
    } catch (err) {
        res.status(500).json({ message: "Error fetching sloka" });
    }
}

const searchSloka = async (req, res) => {
    try {
        const search = req.query.q;
        const data = await Sloka.searchSloka(search);
        if (data.length > 0)
            res.status(200).json(data);
        else
            res.status(404).json({ message: "No sloka found" });
    } catch (err) {
        res.status(500).json({ message: "Error searching sloka" });
    }
}

const filterSloka = async (req, res) => {
    try {
        const data = await Sloka.filterSloka(req.query);
        if (data.length > 0)
            res.status(200).json(data);
        else
            res.status(404).json({ message: "No sloka found" });

    } catch (err) {
        res.status(500).json({ message: "Error filtering sloka" });
    }
}

module.exports = {searchSloka, filterSloka, getAllSloka, getSlokadetails}