const pool = require("../db");
const {bookquery} = require("../query/bookqueries");

const GetAllBooks = async () => {
    const result = await pool.query(bookquery.GetAllBooks);
    return result.rows;
}

const GetBookById = async (id) => {
    const result = await pool.query(bookquery.GetBookById, [id]);
    return result.rows;
}

const GetBookTitles = async () => {
    const result = await pool.query(bookquery.GetBookTitles);
    return result.rows;
}

const AddBook = async (data) => {
    const result = await pool.query(bookquery.AddBook, [data.title, data.description, data.link, data.author, data.image]);
    return result.rows;
}

const UpdateBook = async (data) => {
    const result = await pool.query(bookquery.UpdateBook, [data._id, data.title, data.description, data.link, data.author, data.image]);
    return result.rows;
}

const DeleteBook = async (id) => {
    const result = await pool.query(bookquery.DeleteBook, [id]);
    return result.rows;
}

const SearchBook = async (q) => {
    const result = pool.query(bookquery.SearchBook, [q]);
    return await result.rows;
}

module.exports = {GetAllBooks, GetBookById, GetBookTitles, AddBook, UpdateBook, DeleteBook, SearchBook};