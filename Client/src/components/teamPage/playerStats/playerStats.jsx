import React from "react";

const StatsLeaders =({passing, rushing, receiving})=>{

    let passingLeader = passing.filter(x => x.statType === 'YDS').sort((a,b)=>{
        return b.stat - a.stat
    })[0];

    let rushingLeader = rushing.filter(x => x.statType === 'YDS').sort((a,b)=>{
        return b.stat - a.stat
    })[0];

    let receivingLeader = receiving.filter(x => x.statType === 'YDS').sort((a,b)=>{
        return b.stat - a.stat
    })[0];

    console.log(passingLeader, rushingLeader, receivingLeader);

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