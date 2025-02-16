const Sloka = require("../controller/slokacontroller")
const express = require("express")
const router = express.Router();

router.get("/", Sloka.getAllSloka)
router.get("/keywords", Sloka.slokaKeywords)
router.get("/filter", Sloka.filterSloka)
router.get("/search", Sloka.searchSloka)
router.get("/:id", Sloka.getSlokadetails)
router.put("/:id", Sloka.updateSloka)
router.delete("/:id", Sloka.deleteSloka)
router.post("/", Sloka.createSloka)

module.exports = router;