const granthQuery = require("../query/granthquries");
const pool = require("../db")

const getAllGRanth = async () => {
    const result = await pool.query(granthQuery.GetAllGranth)
    return result.rows;
}

const getGranthDetails = async (id) => {
    const result = await pool.query(granthQuery.GetGranthDetails, [id])
    return result.rows;
}

module.exports = {getAllGRanth, getGranthDetails}