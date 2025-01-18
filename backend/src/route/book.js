const router = require('express').Router();

const book = require("../controller/bookcontroller");

router.get('/all', book.GetAllBooks);

module.exports = router;