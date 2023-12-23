// videoDataReducer.js
const initState = {
    videoData: null,
};

function videoDataReducer(state = initState, action) {
    switch (action.type) {
        case 'SETVIDEODATA':
            return {
                ...state,
                videoData: action.data,
            };
        default:
            return state;
    }
}

export default videoDataReducer;