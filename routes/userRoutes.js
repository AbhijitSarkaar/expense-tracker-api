const express = require("express");
const { fetchDetails } = require("../controllers/userControllers");
const router = express.Router();

router.get("/details", fetchDetails);

module.exports = router;
