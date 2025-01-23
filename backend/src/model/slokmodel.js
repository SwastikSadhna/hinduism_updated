const { getFilterQuery } = require("../middleware/filterHelper");
const slokaquery = require("../query/slokaqueries")
const pool = require("../db")

const getAllSloka = async () => {
    const sloka = await pool.query(slokaquery.GetAllSloka);
    return sloka.rows;
}

const GetSlokaDetails = async (id) => {
    const sloka = await pool.query(slokaquery.GetSlokaDetails, [id]);
    return sloka.rows;
}

const slokaKeywords = async() => {
    const result = await pool.query(slokaquery.SlokaKeywords);
    return result.rows;
}

const searchSloka = async (q) => {
    const sloka = await pool.query(slokaquery.SearchSloka,[q + "%"]);
    return sloka.rows;
}

const filterSloka = async (filter) => {
    const query = getFilterQuery(filter)
    console.log(query)
    const sloka = await pool.query(slokaquery.FilterSloka + query)
    return sloka.rows;
}

module.exports = {getAllSloka, GetSlokaDetails, slokaKeywords, searchSloka, filterSloka}