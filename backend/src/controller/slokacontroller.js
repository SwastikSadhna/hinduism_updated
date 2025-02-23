const Sloka = require("../model/slokmodel")
const toArray = require("../middleware/toArray")

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

const createSloka = async (req, res)=>{
    try{
        const data = {
            title: req.body.title,
            description: req.body?.description || '',
            keyword: toArray(req.body?.keyword) || [],
            explaination: req.body?.explaination || '',
            image: req.body?.image || '',
            sloka: req.body?.sloka || ''
        }
        console.log(data)
        if(data.title != "" && data.description != "" && data.sloka != ""){
            const sloka = await Sloka.addSloka({...data})
            console.log(sloka)
            res.status(201).json(sloka);
        }else{
            res.status(400).json({message: "title, sloka and description are required"})
        }
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Error creating sloka", error: e})
    }
}

const updateSloka = async (req, res) => {
    try{
        const data = {
            title: req.body.title,
            description: req.body?.description,
            keyword: toArray(req.body?.keyword),
            explaination: req.body?.explaination,
            image: req.body?.image,
            sloka: req.body?.sloka
        }
        data.id = req.params.id;
        
        if(data.title != "" && data.description != ""){
            const sloka = await Sloka.updateSloka({...data})
            console.log(sloka)
            res.status(201).json(sloka);
        }else{
            res.status(400).json({message: "title and description are required"})
        }
    }catch(e){
        res.status(500).json({message: "Error updating sloka", error: e})
    }
}

const deleteSloka = async (req, res)=>{
    try{
        const id = req.params.id;
        const sloka = await Sloka.deleteSloka(id);
        res.status(200).json({message: "Sloka deleted successfully"});
    }catch(e){
        res.status(500).json({message: "Error deleting sloka", error: e})
    }
}

module.exports = {searchSloka, filterSloka, slokaKeywords, getAllSloka, getSlokadetails, createSloka, updateSloka, deleteSloka};