import React from "react";
import { useEffect, useState } from "react";
import GameCard from "../Gamecard/Gamecard";
import GameBets from "../Gamecard/GameBets";
import './modal.css';

const Modal = ({currentTeam, onClose}) => {
    
    const {conference, division, id, location, logos, mascot, school} = currentTeam;

    const [lastGame, setLastGame] = useState({});
    const [bettingLines, setBettingLines] = useState();

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
        console.log(bettingLines);
    }, []);
    

    return(
    <div className="modalBackdrop">
        <div className="modalContainer">
            <h2 className="modalTitle"> {school}</h2>
            <img alt={school} src={logos[0]}/>
            <p>
              {mascot}
            </p>
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
            <button onClick ={onClose} type="button">
            Close this modal
            </button>
        </div>
    </div>
    );
};

export default Modal;