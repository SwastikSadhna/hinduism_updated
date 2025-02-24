const express = require("express")
const temple = require("../controller/templeController")
const {verifyToken, checkPermission} = require("../middleware/authentication")
const {upload} = require("../middleware/fileupload")
const router = express.Router()

router.get("/", temple.getAllTemples)
router.get("/search", temple.searchTemple)
router.get("/filter", temple.filterTemple)
router.get("/chardham", temple.getChardhamTemples)
router.get('/keywords', temple.templeKeywords)
router.get("/:id", temple.getTempleById)
router.put("/:id", verifyToken, checkPermission("update","temple"), upload.fields([{name:'cover_image',maxCount:1},{name:"images", maxCount:10},{name:"importance_files",maxCount:1}]), temple.updateTemple)
router.delete("/:id", temple.deleteTemple)
router.post("/", verifyToken, checkPermission("create","temple"), upload.fields([{name:'cover_image',maxCount:1},{name:"images", maxCount:10}]), temple.addTemple)


module.exports = router;