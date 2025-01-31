const queries = require("../query/granthitemqueries")
const pool = require("../db")

const getGranthItems = async (id) => {
    const items = await pool.query(queries.GetGranthItems, [id])
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

module.exports = {SearchGranthItem, getGranthItems, geTAllGranthItems}