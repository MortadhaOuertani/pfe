import { combineReducers } from "redux";

import authReducer from './authReducer'
import errorsReducer from './errorReducer'
import offersReducer from './offersReducer'
import SuccessReducer from "./SuccessReducer";
import companiesReducer from "./companiesReducer";
import candidatesReducer from "./candidatesReducer";
import checkReducer from "./checkReducer";
import errorsCandidatReducer from "./errorsCandidatReducer";
export default combineReducers({
    errors: errorsReducer,
    errorscandidat: errorsCandidatReducer,
    auth: authReducer,
    offers:offersReducer,
    success:SuccessReducer,
    companies:companiesReducer,
    candidates:candidatesReducer,
    check:checkReducer,
})