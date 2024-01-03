// loginInfoReducer.js
import * as types from "../action-types";

const initState = {
    loginInfo: {
        "provider": "",
        "data": {
            "userID": "",
            "id": "",
            "name": "",
        }
    }
}

function loginInfoReducer(state = initState, action) {
    switch (action.type) {
        case types.SET_LOGIN_INFO:
            return {
                ...state,
                loginInfo: action.value,
            };
        default:
            return state;
    }
}

export default loginInfoReducer;