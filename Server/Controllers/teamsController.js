const cfb = require('cfb.js');

const getTeams = (req, res) => {
    try{
        var apiInstance = new cfb.TeamsApi();


        apiInstance.getFbsTeams().then((data, err)=> {
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

const getTeamRoster = (req, res) => {
    try{
        var apiInstance = new cfb.TeamsApi();

        var opts = {
            'team': req.params.teamName
        };

        apiInstance.getRoster(opts).then((data, err)=> {
            if(err){
                console.log(err);
                return res.json(err);
            }

            return res.json(data);
        })
    } catch(error) {
        console.error("ERROR:", error.message);
    }
}

module.exports = {getTeams, getTeamRoster};