const pool = require("../db");
const {bookquery} = require("../query/bookqueries");

const GetAllBooks = async () => {
    const result = await pool.query(bookquery.GetAllBooks);

    return result.rows;
}

module.exports = {GetAllBooks};