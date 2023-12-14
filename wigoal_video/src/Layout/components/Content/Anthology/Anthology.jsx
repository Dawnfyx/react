import React from 'react';
import { connect } from 'react-redux';

import {Drawer} from "antd"

const Anthology = (props) =>{
    console.log(props, 'props');
    const {drawerStatus, drawerSwitch, drawerSwitchSet, videoData } = props;

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
                <>
                    {
                        videoData.map((item, index) => (
                            <div key={index}>
                                {
                                    item.img
                                }
                            </div>
                        ))
                    }
                </>
            </Drawer>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        drawerStatus: state.anthology.anthologyStatus,
        videoData: state.videoData.videoData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        drawerSwitch: () => dispatch({ type: 'SWITCH' }),
        drawerSwitchSet: (value) => dispatch({ type: 'SWITCHSET', value: value}),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Anthology);