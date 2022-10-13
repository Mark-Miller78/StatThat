import React, {useState} from "react";
import './Gamecard.css';

import { useStoreContext } from "../../context/globalState";
import dateFormat from "../../utils/dateFormat";

const GameBets =({bets})=>{
    
    const [state, dispatch] = useStoreContext();

    const {teams} = state;
    const {awayTeam, homeTeam, lines, startDate} = bets[0]

    const date = dateFormat(startDate);
    
    const home = teams.find(team => team.school === homeTeam);
    const away = teams.find(team => team.school === awayTeam);
    
    const awayArr = lines.length? awayTeam.split(' ') : '';
    const homeArr = lines.length? homeTeam.split(' ') : '';

    const favoredTeam = lines.length? lines[0].formattedSpread.split(' ') : '';

    console.log(bets[0]);
    
    return(
        <div className="gameCard">
            <div className="status">{date}</div>
            <ul className="competitors">
                <li className="team">
                    <img className="logos" src={home.logos[0]}/>
                    <div className="team_score">
                        <div className="school">{home.abbreviation}</div>
                        {lines.length ? 
                             homeArr[0] === favoredTeam[0] ? 
                                (<div className="lines"> {favoredTeam[favoredTeam.length - 1]} </div>) : 
                                (<div className="lines"><span className="OU">O/U:</span> {lines[0].overUnder} </div>):
                                ''}

                    </div>
                </li>
                <li className="team">
                    <img className="logos" src={away.logos[0]}/>
                    <div className="team_score">
                        <div className="school">{away.abbreviation}</div>
                        {lines.length ? 
                             awayArr[0] === favoredTeam[0] ? 
                                (<div className="lines"> {favoredTeam[favoredTeam.length - 1]} </div>) : 
                                (<div className="lines"><span className="OU">O/U:</span> {lines[0].overUnder} </div>):
                                ''}
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default GameBets;