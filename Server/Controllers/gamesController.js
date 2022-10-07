const cfb = require ('../utils/cfb')

const getTeamGames = (req, res) =>{
    try{
        const apiInstance = new cfb.GamesApi();

        const year = new Date().getFullYear();

        const opts = {
        'team' : req.params.teamName
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

module.exports = {getTeamGames};