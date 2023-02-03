import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../../context/globalState";

import Schedule from "../../components/teamPage/schedule/schedule";

const TeamPage = () => {
    const {teamId} = useParams();
    const [state] = useStoreContext();

    const {teams} = state;
    const [schedule, setSchedule] = useState([]);

    const currentTeam = teams.find(team => team.id == teamId);
    const {conference, division, id, location, logos, mascot, school, color, altColor} = currentTeam;

    const fetchGames = async() => {    
        let urls = [`/api/games/${school}`, `/api/gamesPost/${school}`]; 

        let promises = urls.map(url => fetch(url).then((res) => res.json()));
        await Promise.all(promises)
            .then(bodies => setSchedule([bodies[0], bodies[1]]))
            .catch((err) => console.log(err));        
    };

    useEffect(() => {
        fetchGames();
    },[]);
    
    
    return (
        <div>
            <p>{currentTeam.school}</p>
            <div>{schedule && <Schedule gameList = {schedule} college = {school}/>}</div>
        </div>
    )
}

export default TeamPage;
