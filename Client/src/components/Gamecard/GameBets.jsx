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
            <div className="team">
                <p><img src={home.logos[0]}/> {home.abbreviation}</p>
                {lines.length? <p>{ homeTeam === favoredTeam[0] ? favoredTeam[1] : lines[0].overUnder}</p> : ''}
            </div>
            <div className="team">
                <p> <img src={away.logos[0]}/> {away.abbreviation}</p>
                {lines.length? <p>{ awayTeam === favoredTeam[0] ? favoredTeam[1] : 'O/U:' + lines[0].overUnder}</p> : ''}
            </div>
        </div>
    )
}

export default GameBets;