import React, {useState} from "react";
import { useEffect } from "react";
import { useStoreContext } from "../../context/globalState";
import './Gamecard.css';

const GameCard =({game})=>{
    const [state, dispatch] = useStoreContext();

    const {teams} = state;
    const {homeTeam, awayTeam, awayPoints, homePoints} = game;

    const home = teams.find(team => team.school === homeTeam);
    const away = teams.find(team => team.school === awayTeam);
   
    return(
        <div className="gameCard">
            <div className="team">
                <p><img src={home.logos[0]}/> {home.abbreviation}</p>
                <p>{homePoints}</p>
            </div>
            <div className="team">
                <p><img src={away.logos[0]}/> {away.abbreviation}</p>
                <p>{awayPoints}</p>
            </div>
        </div>
    )
}

export default GameCard;