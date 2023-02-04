const express = require('express');

const {getRankings} = require("../Controllers/rankingsControllers");
const {getTeams, getTeamRoster} = require('../Controllers/teamsController');
const {getTeamGames, getTeamGamesPost,getGameLines} = require('../Controllers/gamesController');
const {getTeamStats} = require('../Controllers/statsController')
const router = express.Router();

router.get("/rankings", getRankings);
router.get("/teams", getTeams);
router.get("/games/:teamName", getTeamGames);
router.get("/gamesPost/:teamName", getTeamGamesPost);
router.get("/games/betting/:gameId", getGameLines);
router.get("/roster/:teamName", getTeamRoster);
router.get("/teamStats/:teamName", getTeamStats);

module.exports = router;

