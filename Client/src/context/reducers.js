import {
    GET_TEAMS,
    FAV_TEAM
} from './actions';

import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case GET_TEAMS:
            return {...state, teams: [...action.teams]};
        case FAV_TEAM:
            return {...state, favTeam: action.favTeam};
        default:
            return state;
    }
}

export function useCfbReducer(initialState){
    return useReducer(reducer, initialState);
}