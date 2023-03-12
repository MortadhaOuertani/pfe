import { combineReducers } from "redux";

import authReducer from './authReducer'
import errorsReducer from './errorReducer'
import offersReducer from './offersReducer'
import SuccessReducer from "./SuccessReducer";
import companiesReducer from "./companiesReducer";
import candidatesReducer from "./candidatesReducer";
export default combineReducers({
    errors: errorsReducer,
    auth: authReducer,
    offers:offersReducer,
    success:SuccessReducer,
    companies:companiesReducer,
    candidates:candidatesReducer,
})