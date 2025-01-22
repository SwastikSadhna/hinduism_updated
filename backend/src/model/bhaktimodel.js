const pool = require("../db");
const { bhaktiquery, bhakticategory } = require("../query/bhaktiqueries");

const GetAllBhakti = async () => {
    const result = await pool.query(bhaktiquery.GetAllBhakti);
    return result.rows;
}

const GetBhaktiById = async (id) => {
    const result = await pool.query(bhaktiquery.GetBhaktiById, [id]);
    return result.rows;
}

const BhaktiByType = async (type) => {
    const result = await pool.query(bhaktiquery.BhaktiByType, [type]);
    return result.rows;
}

const getAllCategories = async () => {
    const result = await pool.query(bhakticategory.getAllCategories);
    return result.rows;
}

module.exports = { GetAllBhakti, GetBhaktiById, BhaktiByType, getAllCategories };