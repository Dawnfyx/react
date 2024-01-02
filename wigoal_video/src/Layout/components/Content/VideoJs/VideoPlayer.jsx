import React, { useEffect, useRef, useContext } from 'react';
import StoreContext from "../../../../store/StoreContext"

import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayerContainer = (props) => {
    const {
        videoRef,
        playerRef,
        videoData,
        setSpinning,
        setIsShowPlayBtn,
        setProgressTimeCurrent,
        setProgressTimeDuration,
        msgVideoEnded,
    } = props;

    const ctx = useContext(StoreContext);

    const videoOptions = {
        controls: false,
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 播放速度
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        muted: true, // 默认情况下将会消除任何音频。
        disableFullscreen : true, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
            {
                src: videoData[ctx.videoPlayKey].src,
                type: 'video/webm'
            }
        ],
        poster: videoData[ctx.videoPlayKey].img, // 你的封面地址
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

    const handleVideoEnded = (key) => {
        if(key +1 >= videoData.length){
            playerRef.current.pause();
        } else {
            msgVideoEnded(key + 1)
        }
    }

    useEffect(() => {
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;
            playerRef.current = videojs(videoElement, videoOptions, () => {
                console.log('player is ready')

                const player = playerRef.current;
                player.playsinline(true);

                player.on('progress', function() {
                    console.log('player => progress')
                });

                player.on('play', function() {
                    console.log('player => play')
                    setIsShowPlayBtn(false);
                });

                player.on('canplay', function() {
                    console.log('player => canplay')
                    // console.log('视频总时长：', player.duration())
                    setProgressTimeDuration(player.duration())
                    setSpinning(false)
                    // setTimeout(() => {
                    //     player.play();
                    // }, 20);

                    // https://developer.chrome.com/blog/play-request-was-interrupted?hl=zh-cn
                    let playPromise = player.play();
                    if (playPromise !== undefined) {
                        playPromise.then(_ => {
                            player.play();
                        }).catch(error => {
                            console.log('playPromise error:', error)
                            player.pause();
                        });
                    }
                });

                player.on('pause', function() {
                    console.log('player => pause')
                    setIsShowPlayBtn(true);
                });

                player.on('ended', function() {
                    console.log('player => ended')
                    console.log(ctx.videoPlayKey, 'ended videoPlayKey 1')
                    handleVideoEnded(ctx.videoPlayKey)
                    /**
                     * todo
                     * 锁在这里做
                     *
                     */
                    // debugger
                });

                player.on('error', function() {
                    console.log('player => error')
                });

                player.on('timeupdate', function() {
                    // console.log('player => timeupdate', player.currentTime())
                    setProgressTimeCurrent(player.currentTime())
                });

                player.on('fullscreenChange  ', function() {
                    if (player.isFullscreen()) {
                        player.exitFullscreen();
                    }
                });

                player.on('usermedia', function() {
                    if (player.isFullscreen()) {
                        player.exitFullscreen();
                    }
                });

                player.on('load', () => {
                    console.log('player => load')
                });

                player.on('error', (err) => {
                    console.log('player => error', err)
                });
            });
        } else {
            console.log('111111111')

            // const player = playerRef.current;
            // player.playsinline(true);
            //
            // player.on('progress', function() {
            //     // console.log('player => progress')
            // });
            //
            // player.on('play', function() {
            //     console.log('player => play')
            //     setIsShowPlayBtn(false);
            // });
            //
            // player.on('canplay', function() {
            //     console.log('player => canplay')
            //     // console.log('视频总时长：', player.duration())
            //     setProgressTimeDuration(player.duration())
            //     setSpinning(false)
            //     setTimeout(() => {
            //         player.play();
            //     }, 20);
            // });
            //
            // player.on('pause', function() {
            //     console.log('player => pause')
            //     setIsShowPlayBtn(true);
            // });
            //
            // player.on('ended', function() {
            //     console.log('player => ended')
            //     console.log(ctx.videoPlayKey, 'ended videoPlayKey 2')
            //     handleVideoEnded(ctx.videoPlayKey)
            //
            //     /**
            //      * todo
            //      * 锁在这里做
            //      *
            //      */
            //     // debugger
            // });
            //
            // player.on('error', function() {
            //     console.log('player => error')
            // });
            //
            // player.on('timeupdate', function() {
            //     // console.log('player => timeupdate', player.currentTime())
            //     setProgressTimeCurrent(player.currentTime())
            // });
            //
            // player.on('fullscreenChange  ', function() {
            //     if (player.isFullscreen()) {
            //         player.exitFullscreen();
            //     }
            // });
            //
            // player.on('usermedia', function() {
            //     if (player.isFullscreen()) {
            //         player.exitFullscreen();
            //     }
            // });
            //
            // player.on('load', () => {
            //     console.log('player => load')
            // });

        }


        return () => {
            const player = playerRef.current;

            player.off('progress', function() {});

            player.off('play', function() {});

            player.off('canplay', function() {});

            player.off('pause', function() {});

            player.off('ended', function() {});

            player.off('error', function() {});

            player.off('timeupdate', function() {});

            // player.dispose();
        };

    }, [videoRef]);

    return (
        <div data-vjs-player>
            <video ref={videoRef}
                   playsInline="playsinline"
                   className="play_videoJs video-js"
                   style={{
                       height: 'inherit',
                   }}
            >
            </video>
        </div>
    )
}

export default VideoPlayerContainer;