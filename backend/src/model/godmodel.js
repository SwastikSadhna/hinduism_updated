const pool = require('../db');
const {godquery} = require('../query/godqueries');

const GetAllGod = async () => {
    const result = await pool.query(godquery.GetAllGod);
    return result.rows;
}

const GetGodById = async (id) => {
    const result = await pool.query(godquery.GetGodById, [id]);
    return result.rows;
}

const GodKeywords = async () => {
    const result = await pool.query(godquery.GodKeywords);
    return result.rows;
}

const SearchGod = async (q) => {
    const result = await pool.query(godquery.SearchGod, [q + "%"]);
    return result.rows;
}

const GetTrimurty = async () => {
    const result = await pool.query(godquery.GetTrimurty);
    return result.rows;
}

module.exports = { GetAllGod, GetGodById, GodKeywords, SearchGod, GetTrimurty };