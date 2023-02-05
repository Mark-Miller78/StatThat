import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import scheduleDateFormat from "../../../utils/scheduleDate";

import './schedule.css'

const Schedule = ({gameList, college}) =>{
    const schedule = gameList.flat();
    const currentTime = new Date();

    const results = (x, y) => {
        let results;
        if(x.homeTeam === y){
            results = x.homePoints > x.awayPoints ? <span className="results scheduleSpan"><span className="win">W</span> {x.homePoints}-{x.awayPoints}</span> : <span className="results scheduleSpan"><span className="loss">L</span> {x.awayPoints}-{x.homePoints}</span>;
        } else {
            results = x.homePoints < x.awayPoints ? <span className="results scheduleSpan"><span className="win">W</span> {x.awayPoints}-{x.homePoints}</span> : <span className="results scheduleSpan"><span className="loss">L</span> {x.homePoints}-{x.awayPoints}</span>;
        }
        return results;
    }

    const previousGames = schedule.filter(
            (game) => new Date(game.startDate) <= currentTime
        ).map(game =>
            <li key={game.id} className ='scheduleListItem'>
                <span className="date scheduleSpan">{scheduleDateFormat(game.startDate)}</span>&nbsp;
                <span className="team scheduleSpan">{game.homeTeam === college ? 'Vs. ' + game.awayTeam : '@ ' + game.homeTeam }</span>&nbsp;
                {results(game, college)}
            </li>
            );
    const upcomingGames = schedule.filter(
            (game) => new Date(game.startDate) >=currentTime
        );

    return(
        <div>
            <ul className="scheduleList">
                {previousGames}
            </ul>
        </div>
    )
}

export default Schedule;