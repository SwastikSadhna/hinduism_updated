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

const slokaKeywords = async (req, res) => {
    try {
        const sloka = await Sloka.slokaKeywords();

        if(sloka.length > 0) {
            res.status(200).json({ message: 'sloka keywords found', data: sloka })
        } else {
            res.status(404).json({ message: 'no keyword available' })
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: 'something gone wrong', error: error })
    }
}

const searchSloka = async (req, res) => {
    try {
        const search = req.query.q;
        const data = await Sloka.searchSloka(search);
        console.log(data)
        if (data.length > 0)
            res.status(200).json(data);
        else
            res.status(404).json({ message: "No sloka found" });
    } catch (err) {
        res.status(500).json({ message: "Error searching sloka", error: err});
    }
}

const filterSloka = async (req, res) => {
    try {
        if(Object.keys(req.query).length == 0) {
            return res.status(400).json({message: "no filter applied, bad request"});
        }
        
        const data = await Sloka.filterSloka(req.query);
        if (data.length > 0)
            res.status(200).json(data);
        else
            res.status(404).json({ message: "No sloka found" });

    } catch (err) {
        res.status(500).json({ message: "Error filtering sloka" });
    }
}

module.exports = {searchSloka, filterSloka, slokaKeywords, getAllSloka, getSlokadetails}