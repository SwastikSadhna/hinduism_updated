const express = require("express")
const temple = require("../controller/templeController")
const router = express.Router()

router.get("/all", temple.getAllTemples)
router.get("/search", temple.searchTemple)
router.get("/filter", temple.filterTemple)
router.get("/chardham", temple.getChardhamTemples)
router.get('/keywords', temple.templeKeywords)
router.get("/get/:id", temple.getTempleById)

module.exports = router;