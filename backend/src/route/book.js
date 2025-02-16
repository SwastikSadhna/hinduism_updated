const router = require('express').Router();

const book = require("../controller/bookcontroller");

router.get('/', book.GetAllBooks);
router.get('/booklist', book.GetBookTitles);
router.get('/keywords', book.BookKeywords);
router.get('/filter', book.FilterBook);
router.get('/search', book.SearchBook);
router.get('/:id', book.GetBookById);
router.post('/', book.addBook);
router.put('/:id', book.updateBook);
router.delete('/:id', book.DeleteBook);

module.exports = router;