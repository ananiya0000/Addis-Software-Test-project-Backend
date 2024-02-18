const express = require("express");
const router = express.Router();
const StatisticsController = require("../controller/statistics.controller");

router.get("/totalstatistics", StatisticsController.TotalStatistics);
router.get("/songsineverygenre", StatisticsController.SongsInEveryGenre);
router.get("/artistsongsandalbum", StatisticsController.ArtistSongsAndAlbum);
router.get("/songsineachalbum", StatisticsController.SongsInEachAlbum);

module.exports = router;
