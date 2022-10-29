import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../../context/globalState";

const TeamPage = () => {
    const {teamId} = useParams();
    const [state] = useStoreContext();

    const {teams} = state;

    const currentTeam = teams.find(team => team.id == teamId);

    useEffect(()=>{
        console.log(currentTeam);
    }, [currentTeam])



    return (
        <p>{currentTeam.school}</p>
    )
}

export default TeamPage;
