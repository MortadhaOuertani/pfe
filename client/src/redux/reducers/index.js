import { combineReducers } from "redux";

import authReducer from './authReducer'
import errorsReducer from './errorReducer'
export default combineReducers({
    errors: errorsReducer,
    auth: authReducer,
})