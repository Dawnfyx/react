import React, {useState} from 'react';
import { connect } from 'react-redux';

import SwiperVideo from '../../Layout/components/Content/SwiperVideo/SwiperVideo';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './Play.less'
import { Pagination } from 'swiper/modules';

import VideoPlayer from "../../Layout/components/Content/VideoJs/VideoPlayer";
import Anthology from "../../Layout/components/Content/Anthology/Anthology";

const PlayPage = (props) => {

    const {data, options, drawerStatus, drawerSwitch, drawerSwitchSet } = props;

    return (
        <div className="play_box">
            {/*<p>{"" + drawerStatus}</p>*/}
            {/*<button onClick={drawerSwitch}>DRAWERSWITCH</button>*/}
            {/*<button onClick={()=> drawerSwitchSet(true)}>DRAWERSWITCHSET</button>*/}
            <div className="play_content"  onClick={()=> drawerSwitchSet(true)}>
                DRAWERSWITCHSET
            </div>
            <VideoPlayer className="play_video" options={options}></VideoPlayer>
        </div>
    )
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);