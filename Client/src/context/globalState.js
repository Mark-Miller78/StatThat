import React, {createContext, useContext} from "react";
import { useCfbReducer } from "./reducers";

const StoreContext = createContext();
const {Provider} = StoreContext;

const StoreProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useCfbReducer({
        teams: {},
        favTeam : '',
    });

    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext =()=>{
    return useContext(StoreContext);
}

export {StoreProvider, useStoreContext};