const pool = require('../db');
const {templeQueries} = require("../query/templequeries")
const {getFilterQuery} = require("../middleware/filterHelper")

const getAllTemples = async () => {
    const result = await pool.query(templeQueries.GetAllTemples);
    return result.rows;
};

const getTempleById = async (id) => {
    const result = await pool.query(templeQueries.GetTempleById, [id]);
    return result.rows;
};

const addTemple = async (data) => {
    const result = await pool.query(templeQueries.AddTemple, [data.name, data.description, data.cover_image, data.map_url, data.reference_link, data.god, data.location, data.importance, data.images, data.keywords])
    return result.rows;
}


const updateTemple = async (data) => {
    const result = await pool.query(templeQueries.UpdateTemple, [data.name, data.description, data.cover_image, data.map_url, data.reference_link, data.god, data.location, data.importance, data.images, data.keywords, data._id])
    return result.rows;
}

const deleteTemple = async (id) => {
    const result = await pool.query(templeQueries.DeleteTemple, [id])
    return result.rows;
}

const searchTemple = async (q) => {
    const result = await pool.query(templeQueries.SearchTemple, [q])
    return result.rows;
}

const filterTemple = async (query) => {
    let q = getFilterQuery(query)
    const result = await pool.query(templeQueries.FilterTemple + q)
    return result.rows;
}

const GetChardham = async () => {
    const result = await pool.query(templeQueries.GetChardham)
    return result.rows;
}

module.exports = { GetChardham, filterTemple, searchTemple, deleteTemple, updateTemple, addTemple, getAllTemples, getTempleById };