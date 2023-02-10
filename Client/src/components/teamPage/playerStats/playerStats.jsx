import React from "react";
import { useEffect, useState } from "react";
import { useStoreContext } from "../../../context/globalState";

const StatsLeaders =({passing, rushing, receiving})=>{
    const [stats, setStats] = useState([]);

    let [state] = useStoreContext();
    let {roster} = state;

    let prepareStatsLeaders = (data) => {
        let obj = data.filter(x => x.statType === 'YDS').sort((a,b)=>{
            return b.stat - a.stat
        })[0]

        let leader = roster.filter(x => x.id === obj.playerId)[0];

        leader.yards = obj.stat;
        leader.category = obj.category;
        leader.tds = data.filter(x => x.statType === 'TD' && x.playerId === obj.playerId)[0].stat;

        return leader;
    }


   let statsArr = [prepareStatsLeaders(passing), prepareStatsLeaders(rushing), prepareStatsLeaders(receiving)];
   
    
    
    console.log(stats);

    const statsList = statsArr.map(player =>
            <li key={player.id} className='list-group-item'>
                <p>{player.firstName}  {player.lastName}</p>
            </li>
        );

    


    return(
        <div className="card">
            <div className="card-header">
                <p>Team Leaders</p>
            </div>
            <div className="card-body container">
                <ul className="list-group">
                    {statsList}
                </ul>
            </div>
        </div>
    );
}

export default StatsLeaders;