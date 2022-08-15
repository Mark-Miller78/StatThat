const cfb = require("../utils/cfb");

const getRankings = (req, res) =>{
    try{
        const apiInstance = new cfb.RankingsApi();

        var year = 2021

        var opts = {
            'week' : 2,
            'seasonType' : 'regular'
        };

        apiInstance.getRankings(year, opts).then((data, err)=>{
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

module.exports = {getRankings};