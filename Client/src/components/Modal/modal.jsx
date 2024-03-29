import React from "react";
import { useEffect, useState } from "react";

import GameCard from "../Gamecard/Gamecard";
import GameBets from "../Gamecard/GameBets";

import { useStoreContext } from "../../context/globalState";
import { FAV_TEAM } from "../../context/actions";

import {useNavigate} from 'react-router-dom';

import colorSwaps from "../../utils/swapColors";
import fontColors from "../../utils/fontColors";

import './modal.css';

const Modal = ({currentTeam, onClose}) => {
    
    const {conference, division, id, location, logos, mascot, school, color, altColor} = currentTeam;

    const [lastGame, setLastGame] = useState();
    const [bettingLines, setBettingLines] = useState();

    const [state, dispatch] = useStoreContext();
    const navigate = useNavigate();

    const teamColors = {
        color: colorSwaps.includes(school)? color : fontColors(school) || altColor, 
        backgroundColor:  colorSwaps.includes(school)? altColor : color,
    };

    // const fetchGames = async() => {
    //     let urls = [`/api/games/${school}`, `/api/gamesPost/${school}`];
        
    //     let promises = urls.map(url => fetch(url).then((res) => res.json()));
    //     await Promise.all(promises)
    //         .then(bodies => getGames(bodies))
    //         .catch((err) => console.log(err));
                
    // }

    const fetchLines = async(game) => {
        
        const response =await fetch(`/api/games/betting/${game.id}`)
            .then((res) => res.json())
            .then((data) => setBettingLines(data))
            .catch((err)=>console.log(err));
        
    }

    const getGames = (data) =>{
       
        let games = data.flat();
        const currentTime = new Date();

        const previousGames = games.filter(
            (game) => new Date(game.startDate) <= currentTime
        );
        const upcomingGames = games.filter(
            (game) => new Date(game.startDate) >=currentTime
        );
        
        previousGames.length > 0 && setLastGame(previousGames[previousGames.length - 1]);
        upcomingGames.length > 0 && fetchLines(upcomingGames[0]);
    }

    const setFavTeam = () => {
        const teamName = school.split(' ').join('');

        dispatch({
            type: FAV_TEAM,
            favTeam: teamName
        });

        localStorage.setItem('favoriteTeam', JSON.stringify(teamName));

        return navigate(`/teams/${teamName}/${id}`);
    }

    
    
    useEffect(() => {
        const fetchGames = async() => {
            let urls = [`/api/games/${school}`, `/api/gamesPost/${school}`];
            
            let promises = urls.map(url => fetch(url).then((res) => res.json()));
            await Promise.all(promises)
                .then(bodies => getGames(bodies))
                .catch((err) => console.log(err));
                    
        }

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
                    <button onClick={setFavTeam}>
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