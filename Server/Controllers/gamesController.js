const cfb = require ('../utils/cfb')

const getTeamGames = (req, res) =>{
    try{
        const apiInstance = new cfb.GamesApi();

        const year = new Date().getMonth() < 7 ? new Date().getFullYear()-1 : new Date.getFullYear();

        const opts = {
        'team' : req.params.teamName,
        };

        apiInstance.getGames(year, opts).then((data, err)=>{
            if(err){
                console.log(err);
                return res.json(err);
            }

            return res.json(data);
        })
    } catch (error) {
        console.error("ERROR:", error.message);
    }
};

const getTeamGamesPost = (req, res) =>{
    try{
        const apiInstance = new cfb.GamesApi();

        const year = new Date().getMonth() < 7 ? new Date().getFullYear()-1 : new Date.getFullYear();

        const opts = {
        'team' : req.params.teamName,
        'seasonType' : 'postseason'
        };

        apiInstance.getGames(year, opts).then((data, err)=>{
            if(err){
                console.log(err);
                return res.json(err);
            }

            return res.json(data);
        })
    } catch (error) {
        console.error("ERROR:", error.message);
    }
};

const getGameLines = (req, res) => {
    try{
        const apiInstance = new cfb.BettingApi();

        const opts={
            'gameId': req.params.gameId,
            'year' : new Date().getFullYear()
        };

        apiInstance.getLines(opts).then((data,err) =>{
            if(err){
                console.log(err);
                return res.json(err);
            }

            return res.json(data);
        })
    } catch (error){
        console.error("ERROR:", error.message);
    }
};

module.exports = {getTeamGames, getTeamGamesPost, getGameLines};