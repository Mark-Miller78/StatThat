import React, {useState} from "react";
import { useEffect } from "react";
import './Gamecard.css';

const GameBets =({bets})=>{
    
     console.log(bets[0]);
     const {awayTeam, homeTeam, lines} = bets[0]

    
    const favoredTeam = lines.length? lines[0].formattedSpread.split(' ') : '';
     
    return(
        <div className="gameCard">
            <div className="team">
                <p>{homeTeam}</p>
                {lines.length? <p>{ homeTeam === favoredTeam[0] ? favoredTeam[1] : lines[0].overUnder}</p> : ''}
            </div>
            <div className="team">
                <p>{awayTeam}</p>
                {lines.length? <p>{ awayTeam === favoredTeam[0] ? favoredTeam[1] : 'O/U ' + lines[0].overUnder}</p> : ''}
            </div>
        </div>
    )
}

export default GameBets;