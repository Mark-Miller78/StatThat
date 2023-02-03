import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import scheduleDateFormat from "../../../utils/scheduleDate";

import './schedule.css'

const Schedule = ({gameList, college}) =>{
    const schedule = gameList.flat();
    const currentTime = new Date();
    console.log(schedule);

    const results = (x, y) => {
        let results;
        if(x.homeTeam === y){
            results = x.homePoints > x.awayPoints ? `W ${x.homePoints}-${x.awayPoints}` : `L ${x.awayPoints}-${x.homePoints}`;
        } else {
            results = x.awayPoints > x.homePoints ? `W ${x.awayPoints}-${x.homePoints}` : `L ${x.homePoints}-${x.awayPoints}`;
        }
        return results;
    }

    const previousGames = schedule.filter(
            (game) => new Date(game.startDate) <= currentTime
        ).map(game =>
            <li key={game.id}>
                <span className="date">{scheduleDateFormat(game.startDate)}</span>&nbsp;
                {game.homeTeam === college ? 'Vs. ' + game.awayTeam : '@ ' + game.homeTeam }&nbsp;
                {results(game, college)}
            </li>
            );
    const upcomingGames = schedule.filter(
            (game) => new Date(game.startDate) >=currentTime
        );

    return(
        <div>
            <ul>
                {previousGames}
            </ul>
        </div>
    )
}

export default Schedule;