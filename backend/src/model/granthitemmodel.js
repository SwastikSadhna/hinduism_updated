const queries = require("../query/granthitemqueries")
const pool = require("../db")

const getGranthItems = async (id) => {
    const items = await pool.query(queries.GetGranthItemsById, [id])
    return items.rows
}

const SearchGranthItem = async (q) => {
    const items = await pool.query(queries.SearchGranthItem, [q+"%"])
    return items.rows;
}

const geTAllGranthItems = async () => {
    const items = await pool.query(queries.GetGranthItems)
    return items.rows;
}

const addGranthItem = async(data) => {
    const items = await pool.query(queries.AddGranthItem, [data.title, data.description, data.image, data.link, data.granth_id, data.author]);
    return items.rows;
}

const updateGranthItem = async(data) => {
    const items = await pool.query(queries.UpdateGranthItem, [data.title, data.description, data.image, data.link, data.granth_id, data.author, data.id]);
    return items.rows;
}

const deleteGranthItem = async(id) => {
    const items = await pool.query(queries.DeleteGranthItem, [id]);
    return items.rows;
}   

module.exports = {SearchGranthItem, getGranthItems, geTAllGranthItems, addGranthItem, updateGranthItem, deleteGranthItem}