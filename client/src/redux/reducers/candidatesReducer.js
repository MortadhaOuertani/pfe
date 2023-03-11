import { SET_CANDIDATES } from "../types";


const intitialState = { CANDIDATES: []  } ;

export default function (state = intitialState, action){
    switch (action.type) {
        case SET_CANDIDATES : 
         return {
            ...state,
            CANDIDATES: action.payload
         }
         default :
         return state ;
    }

   
     
}