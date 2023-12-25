import React, { useContext } from 'react';
import { connect } from 'react-redux';
import StoreContext from "../../../../store/StoreContext";

import {Drawer} from "antd"

import "./Anthology.less"

const Anthology = (props) =>{
    const {drawerStatus, drawerSwitch, drawerSwitchSet, videoData, AnthologyClick } = props;

    const ctx = useContext(StoreContext);

    const handleAnthologyClick = (key) =>{
        drawerSwitchSet(false);
        AnthologyClick(key);
    }

    return (
        <>
            <Drawer
                className="Anthology_box"
                title="Love's Promotion: From Boss to Hubby"
                placement="bottom"
                closable={false}
                onClose={() => drawerSwitchSet(false)}
                open={drawerStatus}
                key="bottom"
            >
                <div className="episodesList_box">
                    {
                        videoData.map((item, index) => (
                            <div key={index}
                                 onClick={() => handleAnthologyClick(index)}
                                 className={index == ctx.videoPlayKey ? 'episodesList_item active' : 'episodesList_item'}>
                                {index +1 }
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        drawerSwitch: () => dispatch({ type: 'SWITCH' }),
        drawerSwitchSet: (value) => dispatch({ type: 'SWITCHSET', value: value}),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Anthology);