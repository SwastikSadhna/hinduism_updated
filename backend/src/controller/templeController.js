const { getFilterQuery } = require("../middleware/filterHelper")
const toArray = require("../middleware/toArray")
const {uploadPath} = require("../middleware/fileupload")
const Temple = require("../model/templeModel")

const getAllTemples = async (req, res) => {
    try { 
        const temples = await Temple.getAllTemples()
        if (temples)
            res.status(200).json(temples)
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
        if (temple.length>0){
            res.status(200).json(temple)}
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
        if(Object.keys(req.query).length == 0) {
            return res.status(400).json({message: "no filter applied, bad request"});
        }
        
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

const templeKeywords = async (req, res) => {
    try {
        const temple = await Temple.templeKeywords();

        if(temple.length > 0) {
            res.status(200).json({ message: 'temple keywords found', data: temple })
        } else {
            res.status(404).json({ message: 'no keyword available' })
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: 'something gone wrong', error: error })
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

const addTemple = async (req, res)=>{
    try{
        const data = {
            name: req.body?.name,
            description: req.body?.description,
            cover_image: req.body?.cover_image,
            map_url: req.body?.map_url,
            reference_link: toArray(req.body?.reference_link) || [],
            god: req.body?.god,
            location: req.body?.location || '',
            importance: toArray(req.body?.importance) || [],
            keyword: toArray(req.body?.keyword) || [],
            images: toArray(req.body?.images) || []
        }

        if(data.name == "" || data.description == ""){
            res.status(400).json({message: "Temple name and description are required fields."})
        }
        else{
            const temple = await Temple.addTemple({...data});
            res.status(200).json(temple)
        }
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Error occurred while adding temple", error: e})
    }
}

const updateTemple = async (req, res)=>{
    try{
        console.log(req.body)
        const data = {
            name: req.body.name,
            description: req.body.description,
            cover_image: req.body.cover_image,
            map_url: req.body.map_url,
            reference_link: toArray(req.body.reference_link),
            god: req.body.god,
            location: req.body.location,
            importance: toArray(req.body.importance,true) || [],
            keywords: req.body.keywords,
            images: []
        }
        data.id = req.params.id;
        if((data.name == "" || data.description == "") && (data.name == null || data.description)){
            res.status(400).json({message: "Temple name and description are required fields."})
        }
        else{
            console.log(req.files)
            const imagefilename = req.files && req.files["images"];
            const coverimgfilename = req.files && req.files["cover_image"]?.at(0)?.filename;
            if(imagefilename){
                data.images = uploadPath(req,imagefilename);
            }
            if(coverimgfilename){
                data.cover_image = uploadPath(req,coverimgfilename);
            }
            console.log(data)
            const temple = await Temple.updateTemple({...data});
            res.status(200).json(temple)
        }
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Error occurred while updating temple", error: e})
    }
}

const deleteTemple = async (req, res)=>{
    try{
        const id = req.params.id;
        const temple = await Temple.deleteTemple(id);
        res.status(200).json({message: "Temple deleted successfully."})
    }
    catch(e){
            console.log(e)
            res.status(500).json({message: "Error occurred while deleting temple", error: e})
    }
}

module.exports = {getAllTemples, getTempleById, searchTemple, filterTemple, templeKeywords, getChardhamTemples, deleteTemple, addTemple, updateTemple};