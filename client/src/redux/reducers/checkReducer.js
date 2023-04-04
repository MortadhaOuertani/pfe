import { CHECK } from "../types";

const initialState =null;

export default function(state = initialState,action){
    switch(action.type){
        case CHECK:
            return action.payload;
    
        default:
        return state
}
}