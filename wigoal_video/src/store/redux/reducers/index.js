import { combineReducers } from "redux";
import test from "./testReducer";
import anthology from "./anthologyReducer";
import videoData from "./videoDataReducer";
import videoDetailsData from "./videoDetailsDataReducer";

export default combineReducers({
    test,
    anthology,
    videoData,
    videoDetailsData,
});
