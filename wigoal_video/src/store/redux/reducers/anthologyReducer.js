// anthologyReducer.js
const initState = {
    anthologyStatus: false,
};

function anthologyReducer(state = initState, action) {
    console.log(action, 'action')
    switch (action.type) {
        case 'SWITCH':
            return {
                ...state,
                anthologyStatus: !state.anthologyStatus,
            };
        case 'SWITCHSET':
            return {
                ...state,
                anthologyStatus: action.value,
            };
        default:
            return state;
    }
}

export default anthologyReducer;