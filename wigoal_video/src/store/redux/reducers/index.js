import { combineReducers } from "redux";
import test from "./testReducer";
import anthology from "./anthologyReducer";
import videoData from "./videoDataReducer";

export default combineReducers({
    test,
    anthology,
    videoData,
});
