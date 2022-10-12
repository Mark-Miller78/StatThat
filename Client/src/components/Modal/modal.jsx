import React from "react";
import { useEffect, useState } from "react";

import GameCard from "../Gamecard/Gamecard";
import GameBets from "../Gamecard/GameBets";

import colorSwaps from "../../utils/swapColors";
import fontColors from "../../utils/fontColors";

import './modal.css';

const Modal = ({currentTeam, onClose}) => {
    
    const {conference, division, id, location, logos, mascot, school, color, altColor} = currentTeam;
    console.log(currentTeam);

    const [lastGame, setLastGame] = useState();
    const [bettingLines, setBettingLines] = useState();

    const teamColors = {
        color: colorSwaps.includes(school)? color : fontColors(school) || altColor, 
        backgroundColor:  colorSwaps.includes(school)? altColor : color,
    };

    const fetchGames = async() => {
        const response = await fetch(`/api/games/${school}`)
            .then((res) => res.json())
            .then((data) => getGames(data));
        
    }

    const fetchLines = async(game) => {
        
        const response =await fetch(`/api/games/betting/${game.id}`)
            .then((res) => res.json())
            .then((data) => setBettingLines(data));
        
    }

    const getGames = (data) =>{
        const currentTime = new Date();

        const previousGames = data.filter(
            (game) => new Date(game.startDate) <= currentTime
        );
        const upcomingGames = data.filter(
            (game) => new Date(game.startDate) >=currentTime
        );
        
        setLastGame(previousGames[previousGames.length - 1]);
        fetchLines(upcomingGames[0]);
    }

    
    
    useEffect(() => {
        fetchGames();
    },[]);
    

    return(
    <div className="modalBackdrop">
        <div className="modalContainer" 
             style={teamColors}>
            <h2 className="modalTitle"> {school} {mascot}
                <img alt={school} src={logos[0]}/>
            </h2>
            <div className="teamInfo">
                <p>Conference: {conference}  <br></br> {division ? `Division: ${division}` : ''}</p>
                <p>Stadium: {location.name}</p>
                <p>{location.city}, {location.state}</p>
            </div>
            <div className="scoreBoards">
                <div>
                    Previous Game
                    {lastGame && <GameCard game = {lastGame}/>}
                </div>
                <div>
                    Next Game
                    {bettingLines && <GameBets  bets= {bettingLines}/>}
                </div>
            </div>
            <div className="selection">
                Select {school} {mascot} as your team?
                <div className="buttons">
                    <button>
                        Select Team
                    </button>
                    <button onClick ={onClose} type="button">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Modal;