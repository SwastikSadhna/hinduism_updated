const BhaktiModel = require('../model/bhaktimodel');

const GetAllBhakti = async (req, res) => {
    try {
        const bhakti = await BhaktiModel.GetAllBhakti();

        if (bhakti.length > 0) {
            res.status(200).json({ message: 'All Bhakti Found', data: bhakti });
        } else {
            res.status(404).json({ message: 'bhakti not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'something gone wrong', error: error });
    }
}

const GetBhaktiById = async (req, res) => {
    try {
        const bhakti = await BhaktiModel.GetBhaktiById(req.params.bhaktiid);

        if (bhakti.length > 0) {
            res.status(200).json({ message: 'bhakti fetched', data: bhakti });
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
            res.status(200).json({ message: 'bhakti fatched by category', data: bhakti });
        } else {
            res.status(404).json({ message: 'bhakti not found by category' });
        }
    } catch (error) {
        res.status(500).json({ message: 'something gone wrong', error: error });
    }
}

const BhaktiByKeyword = async (req, res) => {
    try {
        const bhakti = await BhaktiModel.BhaktiByKeyword();

        if(bhakti.length > 0) {
            res.status(200).json({ message: 'bhakti keywords found', data: bhakti })
        } else {
            res.status(404).json({ message: 'no keyword available' })
        }
    } catch(error) {
        res.status(500).json({ message: 'something gone wrong', error: error })
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

module.exports = { GetAllBhakti, GetBhaktiById, BhaktiByType, BhaktiByKeyword, getAllCategories};