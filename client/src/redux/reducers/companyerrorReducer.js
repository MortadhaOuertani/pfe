import { ERRORSCOMPANY } from "../types";

const initialState ="";

export default function(state = initialState,action){
    switch(action.type){
        case ERRORSCOMPANY:
            return action.payload;
    
        default:
        return state
}
}