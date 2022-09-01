import React from "react";
import './teamcard.css'

import fontColors from "../../utils/fontColors";

const TeamCard = ({id, school, mascot, primaryColor, secondaryColor, logo}) => {

    const teamColors = {
        color: fontColors(school) || primaryColor,
        backgroundColor: secondaryColor
    };

    return (
        <div className="teamCard col-2"
            style={teamColors}>
            <p>{school}</p>
            <img alt= {school} src={logo}/>
            <p>{mascot}</p>
        </div>
    )
};

export default TeamCard