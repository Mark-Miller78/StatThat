import React, {useState} from "react";
import './teamcard.css'

import fontColors from "../../utils/fontColors";

const TeamCard = ({id, school, mascot, primaryColor, secondaryColor, logo}) => {

    const [isHovering, setIsHovering] = useState(-1);

    const teamColors = {
        color: fontColors(school) || primaryColor,
        backgroundColor: secondaryColor === null? 'white' : secondaryColor
    };

    return (
        <div className={`teamCard col-2 ${isHovering === id? 'cardHover':''}`}
            key={id}
            onMouseEnter={() => setIsHovering(id)} 
            onMouseLeave={() => setIsHovering(-1)}
            style={teamColors}>
                <p>{school}</p>
                <img alt= {school} src={logo}/>
                <p>{mascot}</p>
        </div>
    )
};

export default TeamCard