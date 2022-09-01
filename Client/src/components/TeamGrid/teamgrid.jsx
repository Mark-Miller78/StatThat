import React from "react";
import './teamgrid.css';
import TeamCard from "../Teamcard/teamcard";

import { useStoreContext } from "../../context/globalState";


const TeamGrid = () =>{
    const [state, dispatch] = useStoreContext();
    const {teams} = state;
    
    return(
        <div className="teamsGrid container">
            <div className="row">
                {teams.map(({id, school, mascot, color, altColor, logos}) =>(
                    <TeamCard 
                        key={id} 
                        school={school} 
                        mascot={mascot} 
                        primaryColor = {color}
                        secondaryColor = {altColor}
                        logo = {logos[0]}
                    />
                ))}
            </div>
        </div>
        
    )
}

export default TeamGrid;