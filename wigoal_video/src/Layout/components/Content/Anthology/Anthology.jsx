import React from 'react';
import { connect } from 'react-redux';

import {Drawer} from "antd"

import "./Anthology.less"

const Anthology = (props) =>{
    console.log(props, 'props');
    const {drawerStatus, drawerSwitch, drawerSwitchSet, videoData } = props;

    return (
        <>
            <Drawer
                className="Anthology_box"
                title="Basic Drawer"
                placement="bottom"
                closable={false}
                onClose={() => drawerSwitchSet(false)}
                open={drawerStatus}
                key="bottom"
            >
                <div className="episodesList_box">
                    {
                        videoData.map((item, index) => (
                            <div key={index} className="episodesList_item">
                                {index}
                            </div>
                        ))
                    }
                </div>
            </Drawer>
        </>
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