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
    const result = await pool.query(bookquery.AddBook, [data.title, data.description, data.link, data.author, data.image, data.cover_image, data.keyword, data.year]);
    return result.rows;
}

const UpdateBook = async (data) => {
    const result = await pool.query(bookquery.UpdateBook, [data.id, data.title, data.description, data.link, data.author, data.image, data.cover_image, data.keyword, data.year]);
    return result.rows;
}

const DeleteBook = async (id) => {
    const result = await pool.query(bookquery.DeleteBook, [id]);
    return result.rows;
}

const SearchBook = async (q) => {
    const result = await pool.query(bookquery.SearchBook, [q + "%"]);
    return result.rows;
}

const BookKeywords = async () => {
    const result = await pool.query(bookquery.BookKeywords);
    return result.rows;
}

const FilterBook = async (query) => {
    const result = await pool.query(bookquery.FilterBook + query);
    return result.rows;
}

module.exports = {GetAllBooks, GetBookById, GetBookTitles, AddBook, UpdateBook, DeleteBook, SearchBook, BookKeywords, FilterBook};