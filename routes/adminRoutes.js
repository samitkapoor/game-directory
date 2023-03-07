const express = require("express");

const adminController = require("../controllers/adminController");
const gameController = require("../controllers/gameController");

const router = express.Router();

router.get("/admin", adminController.adminLogin);

router.post("/login", adminController.loginAdmin);

router.get("/request-game-details", adminController.requestGameDetails);

router.post("/accept-game", gameController.addGameThroughAdmin);

router.post("/reject-game", adminController.rejectGame);

module.exports = router;
