import * as types from "../action-types";

export const getUserInfo = (token) => (dispatch) => {
    return new Promise((resolve, reject) => {

    });
};

export const setUserToken = (token) => {
    return {
        type: types.USER_SET_USER_TOKEN,
        token,
    };
};

export const setUserInfo = (userInfo) => {
    return {
        type: types.USER_SET_USER_INFO,
        ...userInfo,
    };
};

export const resetUser = () => {
    return {
        type: types.USER_RESET_USER,
    };
};
