const { getFilterQuery } = require("../middleware/filterHelper");
const bookmodel = require("../model/bookmodel");

const GetAllBooks = async (req, res) => {
    try {
        const book = await bookmodel.GetAllBooks();

        if(book) {
        res.status(200).json({message: "success", data: book});
        } else {
            res.status(404).json({message: "books not found"})
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "something gone wrong", error: error});
    }
}

const GetBookById = async (req, res) => {
    try {
        const book = await bookmodel.GetBookById(req.params.id);

        if(book.length > 0) {
            res.status(200).json({message: "book fetched by id", data: book});
        } else {
            res.status(404).json({message: "book not found"});
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "something gone wrong", error: error});
    }
}

const GetBookTitles = async (req, res) => {
    try {
        const book = await bookmodel.GetBookTitles();

        if(book.length > 0) {
            res.status(200).json({message: "book title founded", data: book})
        } else {
            res.status(404).json({message: "book title not found"});
        }
    } catch(error) {
        res.status(500).json({message: "something gone wrong", error: error});
    }
}

const SearchBook = async (req, res) => {
    try {
        const query = req.query.q;
        const book = await bookmodel.SearchBook(query);

        if(book.length > 0) {
            res.status(200).json({message: "search item access", data: book});
        } else {
            res.status(404).json({message: "search book not found"})
        }
    } catch(error) {
        res.status(500).json({message: "something gone wrong", error: error});
        console.log(error);
    }
}

const DeleteBook = async (req, res) => {
    try {
        const book = await bookmodel.DeleteBook(req.params.id);

        if(book) {
            res.status(200).json({message: "book deleted", data: book});
        } else {
            res.status(404).json({message: "book not found"});
        }
    } catch(error) {
        res.status(500).json({message: "something gone wrong", error: error});
    }
}

const BookKeywords = async (req, res) => {
    try {
        const book = await bookmodel.BookKeywords();

        if(book.length > 0) {
            res.status(200).json({message: 'All book keywords accessed', data: book});
        } else {
            res.status(404).json({message: "book keywords not found"});
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "something gone wrong", error: error});
    }
}

const FilterBook = async (req, res) => {
    try {
        if(Object.keys(req.query).length == 0) {
            return res.status(400).json({message: "no filter applied, bad request"});
        }
        const query = getFilterQuery(req.query);
        const book = await bookmodel.FilterBook(query);
        
        if(book.length > 0) {
            res.status(200).json({message: "Filterd Keyword's Found", data: book});
        } else {
            res.status(404).json({message: "Filterd Keyword's Not Found"});
        }
    } catch(error) {
        res.status(500).json({message: "something gone wrong", error: error})
    }
}

module.exports = {GetAllBooks, GetBookById, GetBookTitles, SearchBook, DeleteBook, BookKeywords, FilterBook};