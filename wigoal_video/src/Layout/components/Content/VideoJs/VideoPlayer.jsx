import React, { useEffect, useRef } from 'react';

import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayerContainer = (props) => {
    const { videoRef, playerRef, videoData, videoDataKey, setVideoDataKey, setProgressTimeCurrent, setProgressTimeDuration, msgVideoEnded} = props;

    const videoOptions = {
        controls: false,
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 播放速度
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
            {
                src: videoData[videoDataKey].src,
                type: 'video/webm'
            }
        ],
        poster: videoData[videoDataKey].img, // 你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
            timeDivider: false,
            durationDisplay: false,
            remainingTimeDisplay: false,
            progressControl: false,
            fullscreenToggle: false // 全屏按钮
        }
    }

    const handleVideoEnded = () => {
        msgVideoEnded('sssss')
    }

    useEffect(() => {
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;
            playerRef.current = videojs(videoElement, videoOptions, () => {
                console.log('player is ready')

                const player = playerRef.current;

                player.on('progress', function() {
                    console.log('player => progress')
                });

                player.on('play', function() {
                    console.log('player => play')
                });
                player.on('canplay', function() {
                    console.log('player => canplay')
                    console.log('视频总时长：', player.duration())
                    setProgressTimeDuration(player.duration())
                });

                player.on('pause', function() {
                    console.log('player => pause')
                });

                player.on('ended', function() {
                    console.log('player => ended')
                    player.src(videoData[videoDataKey+1].src);
                    player.play();
                    setVideoDataKey(videoDataKey+1)

                    /**
                     * todo
                     * 锁在这里做
                     *
                     */
                    handleVideoEnded()
                    // debugger
                });

                player.on('error', function() {
                    console.log('player => error')
                });

                player.on('timeupdate', function() {
                    console.log('player => timeupdate', player.currentTime())
                    setProgressTimeCurrent(player.currentTime())
                });
            });
        } else {
            console.log('1111')
        }



    }, [videoRef]);

    return (
        <div data-vjs-player>
            <video ref={videoRef}
                   className="play_videoJs video-js vjs-default-skin video"
                   style={{
                       height: 'inherit',
                   }}
            >
            </video>
        </div>
    )
}

export default VideoPlayerContainer;