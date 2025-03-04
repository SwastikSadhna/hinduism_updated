const Sloka = require("../controller/slokacontroller")
const express = require("express")
const router = express.Router();
const {verifyToken, checkPermission} = require("../middleware/authentication")
const {upload} = require("../middleware/fileupload");
const { limitdata } = require("../middleware/limitdata");


router.get("/", Sloka.getAllSloka)
router.get("/keywords", Sloka.slokaKeywords)
router.get("/filter", Sloka.filterSloka)
router.get("/search", Sloka.searchSloka)
router.get("/:id", Sloka.getSlokadetails)
router.put("/:id", verifyToken, checkPermission("update","sloka"), upload.single("image"), Sloka.updateSloka)
router.delete("/:id", Sloka.deleteSloka)
router.post("/", verifyToken, checkPermission("create","sloka"), upload.single("image"), Sloka.createSloka)

module.exports = router;