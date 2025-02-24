const express = require("express");
const router = express.Router()
const GranthItems = require("../controller/granthitemcontroller")

router.get("/search", GranthItems.searchItem)
router.get("/:id", GranthItems.getGranthItems)
router.get("/", GranthItems.geTAllGranthItems)
router.post("/", GranthItems.addGranthItem);
router.put("/:id", GranthItems.updateGranthItem);
router.delete('/:id', GranthItems.deleteGranthItem);

module.exports = router;