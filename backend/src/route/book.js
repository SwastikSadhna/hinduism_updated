const router = require('express').Router();

const book = require("../controller/bookcontroller");
const {verifyToken, checkPermission} = require("../middleware/authentication")
const {upload} = require("../middleware/fileupload")

router.get('/', book.GetAllBooks);
router.get('/booklist', book.GetBookTitles);
router.get('/keywords', book.BookKeywords);
router.get('/filter', book.FilterBook);
router.get('/search', book.SearchBook);
router.get('/:id', book.GetBookById);
router.post('/', verifyToken, checkPermission("create","book"), upload.fields([{
    name:"image",
    maxCount:1
},
{
    name:"cover_image",
    maxCount:1
}]), book.addBook);
router.put('/:id', verifyToken, checkPermission("update","book"), upload.fields([{
    name:"image",
    maxCount:1
},
{
    name:"cover_image",
    maxCount:1
}]), book.updateBook);
router.delete('/:id', verifyToken, checkPermission("delete","book"), book.DeleteBook);

module.exports = router;