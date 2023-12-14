import React, { useEffect, useRef } from 'react';

import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = (props) => {
    const { options, onReady } = props;
    const videoRef = useRef();
    const playerRef = useRef();


    useEffect(() => {
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const player = playerRef.current = videojs(videoElement, options, () => {
                console.log("player is ready");
                // onReady && onReady(player);
            });
        } else {
            const player = playerRef.current;
            console.log('playerplayerplayer===',player);
            // player.src(options.sources[0].src);
            // player.autoplay(true);

        }

    }, [options, videoRef])

    return (
        <div data-vjs-player>
            <video ref={videoRef}
                   className="video-js vjs-default-skin video"
                   autoPlay="autoplay"
                   style={{
                       height: 'inherit'
                   }}
            >
            </video>
        </div>
    )
}

export default VideoPlayer;