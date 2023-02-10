import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../../context/globalState";

import Schedule from "../../components/teamPage/schedule/schedule";
import StatsLeaders from "../../components/teamPage/playerStats/playerStats";
import { TEAM_ROSTER } from "../../context/actions";

const TeamPage = () => {
    const {teamId} = useParams();
    const [state, dispatch] = useStoreContext();
    

    const {teams} = state;
    const [schedule, setSchedule] = useState([]);
    const [rushingStats, setRushingStats] = useState();
    const [passingStats, setPassingStats] = useState();
    const [receivingStats, setReceivingStats] = useState();

    const currentTeam = teams.find(team => team.id == teamId);
    const {school} = currentTeam;
    

    const fetchGames = async() => {    
        let urls = [`/api/games/${school}`, `/api/gamesPost/${school}`]; 

        let promises = urls.map(url => fetch(url).then((res) => res.json()));
        await Promise.all(promises)
            .then(bodies => setSchedule([bodies[0], bodies[1]]))
            .catch((err) => console.log(err));        
    };

    const fetchstats = async () =>{
       let urls = [`/api/playerStats/${school}/passing`, `/api/playerStats/${school}/rushing`, `/api/playerStats/${school}/receiving`, `/api/roster/${school}`];

       let promises = urls.map(url => fetch(url).then((res)=> res.json()));
       await Promise.all(promises)
        .then((bodies) => {
            setPassingStats(bodies[0]);
            setRushingStats(bodies[1]);
            setReceivingStats(bodies[2]);
            let roster = bodies[3];
            dispatch({
                type: TEAM_ROSTER,
                roster: roster,
            });
        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchGames();
       fetchstats();
    },[]);
    
    
    return (
        <div>
            <p>{currentTeam.school}</p>
            <div>{schedule && <Schedule gameList = {schedule} college = {school}/>}</div>
            <div>{passingStats && rushingStats && receivingStats && <StatsLeaders passing = {passingStats} rushing={rushingStats} receiving={receivingStats}/>}</div>
        </div>
    )
}

export default TeamPage;
