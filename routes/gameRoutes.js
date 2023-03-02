const express = require("express");

const gameController = require("../controllers/gameController");

const router = express.Router();

router.get("/upload", gameController.uploadGames);

router.get("/about", gameController.about);

router.use("/", gameController.getGames);

module.exports = router;
