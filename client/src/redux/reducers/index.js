import { combineReducers } from "redux";

import authReducer from './authReducer'
import errorsReducer from './errorReducer'
import offersReducer from './offersReducer'
import SuccessReducer from "./SuccessReducer";
import companiesReducer from "./companiesReducer";
import candidatesReducer from "./candidatesReducer";
import checkReducer from "./checkReducer";
import errorsCandidatReducer from "./errorsCandidatReducer";
import companyerrorReducer from "./companyerrorReducer";
import errorrefused from "./errorrefusedReducer";

export default combineReducers({
    errors: errorsReducer,
    errorscompany:companyerrorReducer,
    errorscandidat: errorsCandidatReducer,
    auth: authReducer,
    offers:offersReducer,
    success:SuccessReducer,
    companies:companiesReducer,
    candidates:candidatesReducer,
    check:checkReducer,
    errorrefused:errorrefused,
})