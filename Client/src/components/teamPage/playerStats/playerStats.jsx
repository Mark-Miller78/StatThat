import React from "react";
import { useEffect } from "react";
import { useStoreContext } from "../../../context/globalState";

const StatsLeaders =({passing, rushing, receiving})=>{
    let [state] = useStoreContext();
    let {roster} = state;

    let statsArr = [];

    let prepareStatsLeaders = async (data) => {
        let obj = await data.filter(x => x.statType === 'YDS').sort((a,b)=>{
            return b.stat - a.stat
        })[0]

        let leader = roster.filter(x => x.id === obj.playerId)[0];

        leader.yards = obj.stat;
        leader.category = obj.category;
        leader.tds = data.filter(x => x.statType === 'TD' && x.playerId === obj.playerId)[0].stat;

        statsArr.push(leader);
    }

    prepareStatsLeaders(passing);
    prepareStatsLeaders(rushing);
    prepareStatsLeaders(receiving);

    console.log(statsArr);

    // let passingLeader = passing.filter(x => x.statType === 'YDS').sort((a,b)=>{
    //     return b.stat - a.stat
    // })[0];

    // let rushingLeader = rushing.filter(x => x.statType === 'YDS').sort((a,b)=>{
    //     return b.stat - a.stat
    // })[0];

    // let receivingLeader = receiving.filter(x => x.statType === 'YDS').sort((a,b)=>{
    //     return b.stat - a.stat
    // })[0];


    return(
        <div className="card">
            <div className="card-header">
                <p>Team Leaders</p>
            </div>
            <div className="card-body container">

            </div>
        </div>
    );
}

export default StatsLeaders;