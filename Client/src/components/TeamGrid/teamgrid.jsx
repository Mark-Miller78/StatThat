import React, {useState, useEffect} from "react";
import './teamgrid.css';
import TeamCard from "../Teamcard/teamcard";

import { useStoreContext } from "../../context/globalState";


const TeamGrid = () =>{
    const [state, dispatch] = useStoreContext();
    const {teams} = state;

    const [displayedTeams, setDisplayedTeams] = useState(teams);
    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(e){
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    };

    function handleSubmit(e){
        e.preventDefault();
        teamSearch(teams, searchTerm);
    };

    const teamSearch = (allteams, keyword) =>{
        const searchTerm = keyword.toLowerCase();
        // const schoolSearch = allteams.school
        //                     .split(' ')
        //                     .join('')
        //                     .toLowerCase();
        // const mascotSearch = allteams.mascot
        //                     .split(' ')
        //                     .join('')
        //                     .toLowerCase();

        const teamsToShow = allteams.filter(team => {
            return team.school.split(' ').join('').toLowerCase().match(new RegExp(searchTerm, 'g')) ||
            team.mascot.split(' ').join('').toLowerCase().match(new RegExp(searchTerm, 'g'));
        });

        console.log(teamsToShow);

        if(teamsToShow !==[]){
            setDisplayedTeams(teamsToShow)
        };
    }
    
    return(
        <div className="teamsGrid container">
            <div className="row">
                <form className="col-12 searchBar" onSubmit={handleSubmit}>
                    <label htmlFor="team-search">
                        <span className="visually-hidden">Search for teams</span>
                    </label>
                    <input
                        type='text'
                        id='team-search'
                        placeholder="Team Name"
                        name="team-search"
                        onChange={handleChange}
                    />
                    <button type='submit'>Search</button>
                </form>
                {displayedTeams.map(({id, school, mascot, color, altColor, logos}) =>(
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