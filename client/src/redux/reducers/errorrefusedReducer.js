import { ERRORSREFUSED } from "../types";

const initialState = "";

export default function (state = initialState, action) {
    switch (action.type) {
        case ERRORSREFUSED:
            return action.payload;

        default:
            return state
    }
}