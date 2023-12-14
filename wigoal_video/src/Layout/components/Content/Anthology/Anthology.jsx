import React from 'react';
import { connect } from 'react-redux';

import {Drawer} from "antd"

const Anthology = (props) =>{

    const {drawerStatus, drawerSwitch, drawerSwitchSet } = props;

    return (
        <div>
            <Drawer
                title="Basic Drawer"
                placement="bottom"
                closable={false}
                onClose={() => drawerSwitchSet(false)}
                open={drawerStatus}
                key="bottom"
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state,'state')
    return {
        drawerStatus: state.anthology.anthologyStatus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        drawerSwitch: () => dispatch({ type: 'SWITCH' }),
        drawerSwitchSet: (value) => dispatch({ type: 'SWITCHSET', value: value}),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Anthology);