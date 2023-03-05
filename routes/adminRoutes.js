const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/admin", adminController.adminLogin);

router.post("/login", adminController.loginAdmin);

module.exports = router;
