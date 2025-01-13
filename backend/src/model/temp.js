const pool = require('../db');

const Model1 = async () => {
    const query = 'SELECT * FROM books;';
    const result = await pool.query(query);

    return result.rows;
};

module.exports = { Model1 };