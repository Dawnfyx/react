import { combineReducers } from "redux";
import test from "./testReducer";
import anthology from "./anthologyReducer";

export default combineReducers({
    test,
    anthology
});
