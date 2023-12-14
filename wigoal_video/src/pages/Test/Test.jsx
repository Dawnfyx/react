import React from 'react';
import { connect } from 'react-redux';

import Play from "../Play/Play";

const TestPage = ({ anthologyStatus, anthologyopen, anthologyclose }) => {
    return (
        <div className="test_box">
            <h1>i am TestPage</h1>

            <p>{'' + anthologyStatus}</p>
            <button onClick={anthologyopen}>ANTHOLOGYOPEN</button>
            <button onClick={anthologyclose}>ANTHOLOGYCLOSE</button>

            <br/>
            ========我是分割线========
            <br/>

            {/*<Play*/}
            {/*    style={{*/}
            {/*        display: 'none'*/}
            {/*    }}*/}
            {/*></Play>*/}

        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state, 'state');
    return {
        anthologyStatus: state.anthologyStatus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        anthologyopen: () => dispatch({ type: 'OPEN' }),
        anthologyclose: () => dispatch({ type: 'CLOSE' })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
