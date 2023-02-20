import { SUCCESS } from "../types";

const initialState ={};

export default function(state = initialState,action){
    switch(action.type){
        case SUCCESS:
            return action.payload;
    
        default:
        return state
}
}