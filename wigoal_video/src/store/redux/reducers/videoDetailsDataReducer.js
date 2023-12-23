// videoDetailsDataReducer.js
const initState = {
    videoDetailsData: null,
};

function videoDetailsDataReducer(state = initState, action) {
    switch (action.type) {
        case 'SETDATA':
            return {
                ...state,
                videoDetailsData: action.data,
            };
        default:
            return state;
    }
}

export default videoDetailsDataReducer;