import { ERRORSCANDIDAT } from "../types";

const initialState ="";

export default function(state = initialState,action){
    switch(action.type){
        case ERRORSCANDIDAT:
            return action.payload;
    
        default:
        return state
}
}