const router = require('express').Router();

const book = require("../controller/bookcontroller");

router.get('/all', book.GetAllBooks);
router.get('/:bookid', book.GetBookById);
router.delete('/delete/:bookid', book.DeleteBook);

module.exports = router;