const express = require("express");
const router = express.Router();
const SongsController = require("../controller/songs.controller");

router.get("/getallsongs", SongsController.Getallsongs);
router.get("/getsong", SongsController.Getsong);
router.put("/updatesong", SongsController.Updatesong);
router.delete("/removesong", SongsController.Removesong);
router.post("/createsong", SongsController.Createsong);

module.exports = router;
