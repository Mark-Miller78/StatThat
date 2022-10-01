import React, {useState} from "react";
import './teamcard.css'

import fontColors from "../../utils/fontColors";

const TeamCard = ({id, school, mascot, primaryColor, secondaryColor, logo, toggalModal}) => {

    const swaps = ['Air Force', 'California','Cincinnati', 'Clemson', 'Florida International', 'Iowa', 'Liberty', 'LSU', 'Louisiana Monroe',  'Michigan State', 
                    'Nevada', 'Ohio State', 'Rice', 'San Diego State', 'South Alabama', 'TCU', 'Temple', 'Tulsa', 'Western Michigan'];

    const [isHovering, setIsHovering] = useState(-1);

    const teamColors = {
        color: swaps.includes(school)? primaryColor : fontColors(school) || secondaryColor, 
        backgroundColor:  swaps.includes(school)? secondaryColor : primaryColor,
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