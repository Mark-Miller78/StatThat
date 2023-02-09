import {
    GET_TEAMS,
    FAV_TEAM,
    TEAM_ROSTER
} from './actions';

import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case GET_TEAMS:
            return {...state, teams: [...action.teams]};
        case FAV_TEAM:
            return {...state, favTeam: action.favTeam};
        case TEAM_ROSTER:
            return {...state, roster: [...action.roster]};
        default:
            return state;
    }
}

export function useCfbReducer(initialState){
    return useReducer(reducer, initialState);
}