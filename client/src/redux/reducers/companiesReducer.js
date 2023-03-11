import { SET_COMPANIES } from "../types";


const intitialState = { COMPANIES: [] };

export default function (state = intitialState, action) {
    switch (action.type) {
        case SET_COMPANIES:
            return {
                ...state,
                COMPANIES: action.payload
            }
        default:
            return state;
    }


} 
