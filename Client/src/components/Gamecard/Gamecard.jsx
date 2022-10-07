import React, {useState} from "react";
import { useEffect } from "react";
import './Gamecard.css';

const GameCard =({game})=>{
    const {homeTeam, awayTeam, awayPoints, homePoints, id} = game;

    const [bettingLines, setBettingLines] = useState();

    const fetchLines = async() => {
        if(game.startDate >= new Date()){
            const response = await fetch(`/api/games/betting/${id}`)
                .then((res) => res.json())
                .then((data) => setBettingLines(data));
        }
    }

    useEffect(() => {
        fetchLines();
        console.log(bettingLines);
    })

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