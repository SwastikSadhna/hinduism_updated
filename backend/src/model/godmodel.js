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

const addGod = async (data) => {
    const result = await pool.query(godquery.AddGod, [data.name, data.image, data.description, data.keyword]);
    return result.rows;
}

const updateGod = async (data) => {
    const result = await pool.query(godquery.UpdateGod, [data.id, data.name, data.image, data.description, data.keyword])
    return result.rows;
}

const deleteGod = async (id) => {
    const result = await pool.query(godquery.DeleteGod, [id]);
    return result.rows;
}

module.exports = { GetAllGod, GetGodById, GodKeywords, SearchGod, GetTrimurty, addGod, updateGod, deleteGod };