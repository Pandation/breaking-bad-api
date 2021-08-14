import {useReducer} from 'react';
import {FaChild , FaList , FaAlignCenter} from "react-icons/fa";

const baseURL = "https://www.breakingbadapi.com/api/";
const config = [
    {
        type : "Characters",
        url : "characters",
        icon: <FaChild />
    },
    {
        type : "Episodes",
        url : "episodes",
        icon: <FaList />
    },
    {
        type : "Quotes",
        url : "quotes",
        icon: <FaAlignCenter />
    }
];

const initialValue = {
    baseURL,
    config,
    collapsedMenu : false
};

const reducer = (state, action) => {

    switch(action.type)
    {
        case "setMenuCollapse":
            return {...state, collapsedMenu : !state.collapsedMenu};
        default :
            console.log('err happen');
            return
    }
}




const AppConfig = () => {

    const [configStates, dispatch] = useReducer(reducer, initialValue);

    return [configStates, dispatch]
}

export default AppConfig
