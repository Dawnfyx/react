import React from 'react';
import { connect } from 'react-redux';

import './Play.less'

const PlayPage = ({ count }) => {

    return (
        <div className="play_box">
            <h1>{count}</h1>
            <video controls style={{width: '100%', height: '100%'}}>
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm" />

                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />

                Download the
                <a href="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm">WEBM</a>
                or
                <a href="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4">MP4</a>
                video.
            </video>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

export default connect(mapStateToProps)(PlayPage);