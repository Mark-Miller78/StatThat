import React, {useEffect} from "react";
import TeamGrid from "../../components/TeamGrid/teamgrid";



import {GET_TEAMS} from '../../context/actions';

import { useStoreContext } from "../../context/globalState";

const HomePage = () =>{
    
    const [state, dispatch] = useStoreContext();

    const {teams} = state;

    const fetchTeams = async () =>{
        const response = await fetch('/api/teams')
                .then((res) => res.json());

        localStorage.setItem('Teams', JSON.stringify(response));

        dispatch({
            type: GET_TEAMS,
            teams: response
        });
    };

    useEffect(() => {
        if(!localStorage.getItem('Teams')){
            fetchTeams();
        } else {
            dispatch({
                type: GET_TEAMS,
                teams: JSON.parse(localStorage.getItem('Teams'))
            })
        }
    }, []);

    
    return(
       <div className="page">
            <div>
                Welcome to College Football Spot!!!
            </div>

            <TeamGrid />
       </div>
    );
};

export default HomePage;