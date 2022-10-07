const express = require('express');

const {getRankings} = require("../Controllers/rankingsControllers");
const {getTeams, getTeamRoster} = require('../Controllers/teamsController');
const {getTeamGames} = require('../Controllers/gamesController')
const router = express.Router();

router.get("/rankings", getRankings);
router.get("/teams", getTeams);
router.get("/games/:teamName", getTeamGames)
router.get("/roster/:teamName", getTeamRoster);

module.exports = router;

