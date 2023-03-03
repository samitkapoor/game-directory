const express = require("express");

const gameController = require("../controllers/gameController");

const router = express.Router();

router.get("/upload", gameController.uploadGames);

router.get("/about", gameController.about);

router.get("/game-details", gameController.gameDetails);

router.post("/add-game", gameController.addGame);

router.post("/edit-game", gameController.editGame);

router.post("/", gameController.updateGame);

router.use("/", gameController.getGames);

module.exports = router;
