const express = require("express");

const gameController = require("../controllers/gameController");

const router = express.Router();

router.use("/", gameController.getGames);

router.get("upload", gameController.uploadGames);

module.exports = router;
