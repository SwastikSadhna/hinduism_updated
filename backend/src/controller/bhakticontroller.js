const { getFilterQuery } = require("../middleware/filterHelper")
const BhaktiModel = require('../model/bhaktimodel');
const {uploadPath} = require("../middleware/fileupload")
const toArray = require("../middleware/toArray")

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

        if (bhakti.length > 0) {
            res.status(200).json(bhakti)
        } else {
            res.status(404).json({ message: 'no keyword available' })
        }
    } catch (error) {
        res.status(500).json({ message: 'something gone wrong', error: error })
    }
}

const FilterBhakti = async (req, res) => {
    try {
        if (Object.keys(req.query).length == 0) {
            return res.status(400).json({ message: "no filter applied, bad request" });
        }
        console.log(req.query)
        const filter = req.query;
        const query = getFilterQuery(filter);
        const bhakti = await BhaktiModel.FilterBhakti(query);

        if (bhakti.length > 0) {
            res.status(200).json(bhakti);
        } else {
            res.status(404).json({ message: 'no data available for this filter' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something gone wrong', error: error });
    }
}

const AddBhakti = async (req, res) => {

    try {
        const data = {
            title: req.body.title,
            description: req.body?.description || '',
            keyword: toArray(req.body?.keyword) || [],
            category: req.body?.category || "",
            content: req.body?.content || "",
            author: req.body?.author || "",
            reference_links: toArray(req.body?.reference_links) || [],
            image: '',
            file:''
        }
        console.log(req.files)
        if (data.title != ""  && data.category != "") {
            
            const image = req.files?.["image"]?.at(0)?.filename;
            const file = req.files?.["file"]?.at(0)?.filename;
            if(image){
                data.image = uploadPath(req,image);
            }
            if(file){
                data.file = uploadPath(req,file);
            }

            const bhakti = await BhaktiModel.AddBhakti({ ...data })
            res.status(200).json(bhakti[0]);
        }
        else
            return res.status(400).json({ error: "all fields are required" });
    } catch (e) {
        res.status(500).json({ error: e, message: "Some internal problems occured" })
    }
}

const DeleteBhakti = async (req, res) => {
    try {
        const id = req.params.id;
        const bhakti = await BhaktiModel.DeleteBhakti(id);
        res.status(200).json({ message: "Bhakti deleted successfully" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e, message: "Some internal problems occured" })
    }
}


const UpdateBhakti = async (req, res) => {

    const data = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        keyword: toArray(req.body.keyword) || [],
        image: '',
        category: req.body.category,
        content: req.body.content,
        author: req.body.author,
        reference_links: toArray(req.body?.reference_links) || [],
        file:''
    }
    try {
        if ((data.title != "" && data.category != "") 
            && (data.title != 'null' && data.content != 'null')) {
            const image = req.files?.["image"]?.at(0)?.filename;
            const file = req.files?.["file"]?.at(0)?.filename;
            if(image){
                data.image = uploadPath(req,image);
            }
            if(file){
                data.file = uploadPath(req,file);
            }
            console.log(req.files)
            const bhakti = await BhaktiModel.UpdateBhakti({ ...data })
            res.status(200).json(bhakti[0]);
        }
        else
            return res.status(400).json({ error: "all fields are required" });
    } catch (e) {
        res.status(500).json({ error: e, message: "Some internal problems occured" })
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

const getCategoryById = async (req, res) => {
    try {
        const category = await BhaktiModel.getCategoryById(req.params.id);
        if (category.length > 0) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: 'no category found!' });
        }
    } catch (error) {
        res.status(500).json({ message: 'something gone wrong', error: error })
    }
}

const addCategory = async (req, res) => {
    const data = {
        name: req.body.name,
        description: req.body?.description || '',
        image: req.body?.image || '',
    }

    try {
        if (data.name != "" && data.description != "" && data.name != 'null' && data.description != 'null') {
            const filename = req.file?.filename;
            if(filename){
                data.image = uploadPath(req,filename);
            }
            const category = await BhaktiModel.addCategory({ ...data });
            res.status(200).json(category[0]);
        } else {
            res.status(400).json({ error: "bhakti category name is required" });
        }
    } catch (error) {
        res.status(500).json({ message: 'something gone wrong', error: error })
    }
}

const updateCategory = async (req, res) => {
    const data = {
        id: req.body.id,
        name: req.body.name,
        description: req.body?.description || '',
        image: req.body?.image || '',
    }

    console.log(data)
    try {
        if (data.name != "" && data.name != "null" && data.description != "" && data.description != "null") {
            const filename = req.file?.filename;
            if(filename){
                data.image = uploadPath(req,filename);
            }
            const category = await BhaktiModel.updateCategory({ ...data });
            res.status(200).json(category[0]);
        } else {
            res.status(404).json({ message: 'bhakticategory not updated !' })
        }
    } catch (error) {
        res.status(500).json({ message: 'something gone wrong!', error: error })
    }
}

const deleteCategory = async (req, res) => {
    try {
        const category = await BhaktiModel.deleteCategory(req.params.id);

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'something gone wrong', error: error });
    }
}

module.exports = { GetAllBhakti, GetBhaktiById, BhaktiByType, BhaktiKeywords, FilterBhakti, getAllCategories, AddBhakti, DeleteBhakti, UpdateBhakti, getCategoryById, addCategory, updateCategory, deleteCategory };