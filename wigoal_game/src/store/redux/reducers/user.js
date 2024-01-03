// userInfoReducer.js
import * as types from "../action-types";

const initState = {
    name: "",
    role: "",
    avatar: "",
    token: "",
    userInfo: null
};

function userInfoReducer(state = initState, action) {
    switch (action.type) {
        case types.SET_USER_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        case types.SET_USER_INFO:
            return {
                ...state,
                name: action.name,
                role: action.role,
                avatar: action.avatar,
            };
        default:
            return state;
    }
}

export default userInfoReducer;

