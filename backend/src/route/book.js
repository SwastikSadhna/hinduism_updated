const router = require('express').Router();

const book = require("../controller/bookcontroller");

router.get('/', book.GetAllBooks);
router.get('/booklist', book.GetBookTitles);
router.get('/keywords', book.BookKeywords);
router.get('/:id', book.GetBookById);
router.get('/search', book.SearchBook);
router.delete('/:id', book.DeleteBook);
router.get('/filter', book.FilterBook);

module.exports = router;