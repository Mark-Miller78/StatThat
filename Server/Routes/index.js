const express = require('express');

const {getRankings} = require("../Controllers/rankingsControllers");
const {getTeams, getTeamRoster} = require('../Controllers/teamsController');
const {getTeamGames, getGameLines} = require('../Controllers/gamesController')
const router = express.Router();

router.get("/rankings", getRankings);
router.get("/teams", getTeams);
router.get("/games/:teamName", getTeamGames);
router.get("/roster/:teamName", getTeamRoster);
router.get("/games/betting/:gameId", getGameLines);

module.exports = router;

