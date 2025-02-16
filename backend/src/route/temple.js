const express = require("express")
const temple = require("../controller/templeController")
const {verifyToken, checkPermission} = require("../middleware/authentication")
const router = express.Router()

router.get("/", temple.getAllTemples)
router.get("/search", temple.searchTemple)
router.get("/filter", temple.filterTemple)
router.get("/chardham", temple.getChardhamTemples)
router.get('/keywords', temple.templeKeywords)
router.get("/:id", temple.getTempleById)
router.put("/:id", verifyToken, checkPermission("update","temple"), temple.updateTemple)
router.delete("/:id", temple.deleteTemple)
router.post("/", temple.addTemple)


module.exports = router;