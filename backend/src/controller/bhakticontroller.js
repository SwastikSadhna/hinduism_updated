const { getFilterQuery } = require("../middleware/filterHelper")
const BhaktiModel = require('../model/bhaktimodel');


const GetAllBhakti = async (req, res) => {
    try {

        const bhakti = await BhaktiModel.GetAllBhakti();

        if (bhakti.length > 0) {
            res.status(200).json(bhakti);
        } else {
            res.status(404).json({ message: 'bhakti not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'something gone wrong', error: error });
    }
}

const GetBhaktiById = async (req, res) => {
    try {
        const bhakti = await BhaktiModel.GetBhaktiById(req.params.id);

        if (bhakti.length > 0) {
            res.status(200).json(bhakti);
        } else {
            res.status(404).json({ message: 'bhakti not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'sothing gone wrong', error: error });
    }
}

const BhaktiByType = async (req, res) => {
    try {
        const bhakti = await BhaktiModel.BhaktiByType(req.params.id);

        if (bhakti.length > 0) {
            res.status(200).json(bhakti);
        } else {
            res.status(404).json({ message: 'bhakti not found by category' });
        }
    } catch (error) {
        res.status(500).json({ message: 'something gone wrong', error: error });
    }
}

const BhaktiKeywords = async (req, res) => {
    try {
        const bhakti = await BhaktiModel.BhaktiKeywords();

        if(bhakti.length > 0) {
            res.status(200).json(bhakti)
        } else {
            res.status(404).json({ message: 'no keyword available' })
        }
    } catch(error) {
        res.status(500).json({ message: 'something gone wrong', error: error })
    }
}

const FilterBhakti = async (req, res) => {
    try {
        if(Object.keys(req.query).length == 0) {
            return res.status(400).json({message: "no filter applied, bad request"});
        }
        
        const filter = req.query;
        const query = getFilterQuery(filter);
        const bhakti = await BhaktiModel.FilterBhakti(query);

        if(bhakti.length > 0) {
            res.status(200).json(bhakti);
        } else {
            res.status(404).json({message: 'no data available for this filter'});
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({message: 'something gone wrong', error: error});
    }
}

const getAllCategories = async (req, res) => {
    try {
        const categories = await BhaktiModel.getAllCategories();
        if (categories.length > 0)
            res.status(200).json(categories)
        else
            res.status(404).json({ message: 'categories not found' });
    } catch (err) {
        res.status(500).json({ message: 'something gone wrong', error: err });
    }
}

const AddBhakti = async (req, res) => {

    try{
        const data = {
            title: req.body.title,
            description: req.body?.description || '',
            keyword: req.body?.keyword || [],
            image: req.body?.image || "",
            category: req.body?.category || "",
            content: req.body?.content || "",
            author: req.body?.author || "",
            reference_links: req.body?.reference_links || [],
        }
        console.log(data)
        if(data.title != "" && data.content != "" && data.category != "")
        {    
            const bhakti = await BhaktiModel.AddBhakti({...data})
            res.status(200).json(bhakti[0]);}
        else
            return res.status(400).json({error: "all fields are required"});
    }catch(e){
        res.status(500).json({error: e, message: "Some internal problems occured"})
    }
}

const DeleteBhakti = async (req,res)=>{
    try{
        const id = req.params.id;
        const bhakti = await BhaktiModel.DeleteBhakti(id);
        res.status(200).json({message: "Bhakti deleted successfully"});
    }catch(e){
        console.log(e);
        res.status(500).json({error: e, message: "Some internal problems occured"})
    }
}


const UpdateBhakti = async (req, res) => {

    const data = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        keyword: req.body.keyword ,
        image: req.body.image,
        category: req.body.category,
        content: req.body.content,
        author: req.body.author,
        reference_links: req.body?.reference_links,
    }
    console.log(data)
    try{
        if(data.title != "" && data.content != "" && data.category != "")
        {
            const bhakti = await BhaktiModel.UpdateBhakti({...data})
            res.status(200).json(bhakti[0]);}
        else
            return res.status(400).json({error: "all fields are required"});
    }catch(e){
        res.status(500).json({error: e, message: "Some internal problems occured"})
    }
}

module.exports = { GetAllBhakti, GetBhaktiById, BhaktiByType, BhaktiKeywords, FilterBhakti, getAllCategories, AddBhakti, DeleteBhakti, UpdateBhakti };