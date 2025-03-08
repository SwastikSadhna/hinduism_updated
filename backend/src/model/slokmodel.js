const { getFilterQuery } = require("../middleware/filterHelper");
const slokaquery = require("../query/slokaqueries")
const pool = require("../db")

const getAllSloka = async (limit, offset) => {
    const slokaData = await pool.query(slokaquery.GetAllSloka, [limit, offset]);
    const totalCount = await pool.query(`SELECT COUNT(*) FROM public."slokas"`);

    return {
        data: slokaData.rows,
        total: parseInt(totalCount.rows[0].count, 10),
    };
};

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

const addSloka = async (data)=>{
    const result = await pool.query(slokaquery.AddSloka, [data.title, data.sloka, data.explaination, data.image, data.description, data.keyword])
    return result.rows[0];
}

const deleteSloka = async (id)=>{
    const result = await pool.query(slokaquery.DeleteSloka, [id])
    return result.rows;
}

const updateSloka = async (data)=>{
    const result = await pool.query(slokaquery.UpdateSloka, [data.title, data.description, data.keyword, data.sloka, data.explaination, data.image, data.id])
    return result.rows[0];
}

module.exports = {getAllSloka, GetSlokaDetails, slokaKeywords, searchSloka, filterSloka, addSloka, updateSloka, deleteSloka}