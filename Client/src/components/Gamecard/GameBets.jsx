import React, {useState} from "react";
import './Gamecard.css';

import { useStoreContext } from "../../context/globalState";

const GameBets =({bets})=>{
    
    const [state, dispatch] = useStoreContext();

    const {teams} = state;
    const {awayTeam, homeTeam, lines} = bets[0]
    
    
    const home = teams.find(team => team.school === homeTeam);
    const away = teams.find(team => team.school === awayTeam);
    
    const favoredTeam = lines.length? lines[0].formattedSpread.split(' ') : '';
    return(
        <div className="gameCard">
            <ul className="competitors">
                <li className="team">
                    <img className="logos" src={home.logos[0]}/>
                    <div className="team_score">
                        <div className="school">{home.abbreviation}</div>
                        {lines.length? <div className="lines">{ homeTeam === favoredTeam[0] ? favoredTeam[1] : 'O/U ' + lines[0].overUnder}</div> : ''}
                    </div>
                </li>
                <li className="team">
                    <img className="logos" src={away.logos[0]}/>
                    <div className="team_score">
                        <div className="school">{away.abbreviation}</div>
                        {lines.length? <div className="lines">{ awayTeam === favoredTeam[0] ? favoredTeam[1] : 'O/U:' + lines[0].overUnder}</div> : ''}
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default GameBets;