const { getFilterQuery } = require("../middleware/filterHelper");
const slokaquery = require("../query/slokaqueries")
const pool = require("../db")

const getAllSloka = async () => {
    const sloka = await pool.query(slokaquery.GetAllSloka);
    return sloka;
}

const GetSlokaDetails = async (id) => {
    const sloka = await pool.query(slokaquery.GetSlokaDetails, [id]);
    return sloka;
}

const searchSloka = async (q) => {
    const sloka = await pool.query(slokaquery.SearchSloka,[q + "%"]);
    return sloka;
}

const filterSloka = async (filter) => {
    const query = getFilterQuery(filter)
    const sloka = await pool.query(slokaquery.FilterSloka + query)
    return sloka;
}

module.exports = {getAllSloka, GetSlokaDetails, searchSloka, filterSloka}