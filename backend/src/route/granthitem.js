const express = require("express");
const router = express.Router()
const GranthItems = require("../controller/granthitemcontroller")

router.get("/search", GranthItems.searchItem)
router.get("/items/:id", GranthItems.getGranthItems)

module.exports = router;