import React, {useState} from "react";
import './teamcard.css'

import fontColors from "../../utils/fontColors";
import colorSwaps from "../../utils/swapColors";

const TeamCard = ({id, school, mascot, primaryColor, secondaryColor, logo, toggalModal}) => {

    const [isHovering, setIsHovering] = useState(-1);

    const teamColors = {
        color: colorSwaps.includes(school)? primaryColor : fontColors(school) || secondaryColor, 
        backgroundColor:  colorSwaps.includes(school)? secondaryColor : primaryColor,
    };

    return (
        <div className={`teamCard col-2 ${isHovering === id? 'cardHover':''}`}
            key={id}
            onMouseEnter={() => setIsHovering(id)} 
            onMouseLeave={() => setIsHovering(-1)}
            onClick={() => toggalModal(school)}
            style={teamColors}>
                <p>{school}</p>
                <img alt= {school} src={logo}/>
                <p>{mascot}</p>
        </div>
    )
};

export default TeamCard