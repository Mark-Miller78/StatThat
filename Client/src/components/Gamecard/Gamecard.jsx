import React from "react";
import './Gamecard.css';

const GameCard =({game})=>{
    const {homeTeam, awayTeam, awayPoints, homePoints} = game;


    return(
        <div className="gameCard">
            <div className="team">
                <p>{homeTeam}</p>
                <p>{homePoints}</p>
            </div>
            <div className="team">
                <p>{awayTeam}</p>
                <p>{awayPoints}</p>
            </div>
        </div>
    )
}

export default GameCard;