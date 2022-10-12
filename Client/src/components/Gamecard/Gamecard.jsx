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
           <ul className="competitors">
                <li className="team">
                    <img className="logos" src={home.logos[0]}/> 
                    <div className="team_score">
                        <div className="school">{home.abbreviation}</div>
                        <div className="score">{homePoints}</div>
                    </div>
                </li>
                <li className="team">
                    <img className="logos" src={away.logos[0]}/> 
                    <div className="team_score">
                        <div className="school">{away.abbreviation}</div>
                        <div className="score">{awayPoints}</div>
                    </div>
                </li>
           </ul>
        </div>
    )
}

export default GameCard;