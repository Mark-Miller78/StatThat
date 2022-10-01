import React, {useState, useEffect} from "react";
import './teamgrid.css';
import TeamCard from "../Teamcard/teamcard";
import Modal from "../Modal/modal";

import { useStoreContext } from "../../context/globalState";


const TeamGrid = () =>{
    const [state, dispatch] = useStoreContext();
    const {teams} = state;

    const [displayedTeams, setDisplayedTeams] = useState(teams);
    const [currentTeam, setCurrentTeam] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggalModal = (school) => {
        setCurrentTeam(displayedTeams.find(team => team.school === school));
        setIsModalOpen(!isModalOpen);
    }

    function handleChange(e){
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    };

    function handleSubmit(e){
        e.preventDefault();
        teamSearch(teams, searchTerm);
    };

    const teamSearch = (allteams, keyword) =>{
        const searchTerm = keyword.split(' ').join('').toLowerCase();

        const teamsToShow = allteams.filter(team => {
            return team.school.split(' ').join('').toLowerCase().match(new RegExp(searchTerm, 'g')) ||
            team.mascot.split(' ').join('').toLowerCase().match(new RegExp(searchTerm, 'g')) ||
            team.conference.split(' ').join('').toLowerCase().match(new RegExp(searchTerm, 'g'));
        });

        if(teamsToShow.length !== 0){
            setDisplayedTeams(teamsToShow)
        };
    }
    
    useEffect(()=>{
        setDisplayedTeams(teams);
    }, [teams]);

    return(
        <div className="teamsGrid container">
            {isModalOpen && <Modal currentTeam={currentTeam} onClose={toggalModal}/>}
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
                        toggalModal = {toggalModal}
                    />
                ))}
            </div>
        </div>
        
    )
}

export default TeamGrid;