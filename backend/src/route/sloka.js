const Sloka = require("../controller/slokacontroller")
const express = require("express")
const router = express.Router();

router.get("/all", Sloka.getAllSloka)
router.get("/details/:id", Sloka.getSlokadetails)
router.get("/keywords", Sloka.slokaKeywords)
router.get("/filter", Sloka.filterSloka)
router.get("/search", Sloka.searchSloka)


module.exports = router;