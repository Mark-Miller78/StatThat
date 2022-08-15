const express = require('express');

const {getRankings} = require("../Controllers/teamControllers");
const router = express.Router();

router.get("/rankings", getRankings);

module.exports = router;

