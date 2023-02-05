const cfb = require('../utils/cfb');

const getTeamStats=(req, res) =>{
    try{
        const apiInstance = new cfb.StatsApi();

        const opts = {
            'team' : req.params.teamName,
            'year' : new Date().getMonth() < 7 ? new Date().getFullYear()-1 : new Date.getFullYear(),
        };

        apiInstance.getTeamSeasonStats(opts).then((data, err) => {
            if(err){
                console.log(err);
                return res.json(err);
            }

            return res.json(data);
        })
    } catch(error){
        console.log("ERROR: ", error.message);
    }
};

const getPlayerStats = (req, res) => {
    try{
        const apiInstance = new cfb.PlayersApi();
        const year = new Date().getMonth() < 7 ? new Date().getFullYear()-1 : new Date.getFullYear();

        const opts = {
            'team' : req.params.teamName,
            'category' : req.params.statType
        }

        apiInstance.getPlayerSeasonStats(year, opts).then((data, err) => {
            if(err){
                console.log(err);
                return res.json(err);
            }

            return res.json(data);
        })
    } catch(error){
        console.log("ERROR: ", error.message);
    }
};

module.exports = {getTeamStats, getPlayerStats};