const granthQuery = require("../query/granthquries");
const pool = require("../db")

const getAllGranth = async () => {
    const result = await pool.query(granthQuery.GetAllGranth)
    return result.rows;
}

const getGranthDetails = async (id) => {
    const result = await pool.query(granthQuery.GetGranthDetails, [id])
    return result.rows;
}

const addGranth = async (data) => {
    const result = await pool.query(granthQuery.AddGranth, [data.title, data.description, data.image]);
    return result.rows;
}

const updateGranth = async (data) => {
    const result = await pool.query(granthQuery.UpdateGranth, [data.title, data.description, data.image, data.id]);
    return result.rows;
}

const deleteGranth = async(id) => {
    const result = await pool.query(granthQuery.DeleteGranth, [id]);
    return result.rows;
}

module.exports = {getAllGranth, getGranthDetails, addGranth, updateGranth, deleteGranth};