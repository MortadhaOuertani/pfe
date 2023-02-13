import { combineReducers } from "redux";

import authReducer from './authReducer'
import errorsReducer from './errorReducer'
import offersReducer from './offersReducer'
export default combineReducers({
    errors: errorsReducer,
    auth: authReducer,
    offers:offersReducer
})