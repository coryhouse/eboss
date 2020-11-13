import { combineReducers } from "redux";
import candidates from "./candidateReducer";

const rootReducer = combineReducers({
  candidates,
});

export default rootReducer;
