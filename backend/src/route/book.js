const router = require('express').Router();

const book = require("../controller/bookcontroller");

router.get('/all', book.GetAllBooks);
router.get('/booklist', book.GetBookTitles);
router.get('/id/:bookid', book.GetBookById);
router.get('/search', book.SearchBook);
router.delete('/delete/:bookid', book.DeleteBook);

module.exports = router;