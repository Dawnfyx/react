// userInfoReducer.js
const initState = {
    name: "",
    role: "",
    avatar: "",
    token: "",
    userInfo: null
};

function userInfoReducer(state = initState, action) {
    switch (action.type) {
        case 'SETTOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET':
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

