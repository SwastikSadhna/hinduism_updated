const express = require("express");
const router = express.Router()
const GranthItems = require("../controller/granthitemcontroller")
const {verifyToken, checkPermission} = require("../middleware/authentication")
const {upload} = require("../middleware/fileupload")

router.get("/search", GranthItems.searchItem)
router.get("/:id", GranthItems.getGranthItems)
router.get("/", GranthItems.geTAllGranthItems)
router.post("/", verifyToken, checkPermission("update","granthitem"), upload.single('image'), GranthItems.addGranthItem);
router.put("/:id", verifyToken, checkPermission("update","granthitem"), upload.single('image'), GranthItems.updateGranthItem);
router.delete('/:id', verifyToken, checkPermission("update","granthitem"), GranthItems.deleteGranthItem);

module.exports = router;