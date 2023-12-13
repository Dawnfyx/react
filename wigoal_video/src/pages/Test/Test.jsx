import React from 'react';
import { connect } from 'react-redux';

import Play from "../Play/Play";

const TestPage = ({ count, increment, decrement }) => {
    return (
        <div className="test_box">
            <h1>i am TestPage</h1>

            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <br/>
            ========我是分割线========
            <br/>

            <Play></Play>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
