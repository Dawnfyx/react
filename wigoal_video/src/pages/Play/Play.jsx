import React, {useState, useEffect, useRef, useCallback} from 'react';
import { useLocation } from 'react-router'

import SwiperContainer from "../../Layout/components/Swiper/Swiper"
import VideoPlayerContainer from "../../Layout/components/Content/VideoJs/VideoPlayer";
import Anthology from "../../Layout/components/Content/Anthology/Anthology";

import './Play.less'

const PlayPage = (props) => {

    const { search } = useLocation()

    const videoData = [
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/2.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/3.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/4.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/5.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/6.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/7.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/8.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/9.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/10.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/11.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/12.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/13.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/14.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/15.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/16.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/17.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/18.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/19.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/20.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/21.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/22.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/23.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/24.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/25.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/26.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/27.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/28.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/29.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/30.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/31.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/32.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/33.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/34.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/35.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/36.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/37.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/38.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/39.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/40.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/41.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/42.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/43.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/44.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/45.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
        {
            src: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/46.mp4',
            img: 'https://res.net-goal.com/video/loves_promotion_from_boss_to_hubby/1.png',
        },
    ]

    const childRef = useRef();
    const videoRef = useRef();
    const playerRef = useRef();
    const [spinning, setSpinning] = useState(true);
    const [videoDataKey, setVideoDataKey] = useState(0);
    const [isShowPlayBtn, setIsShowPlayBtn] = useState(true);
    const [progressTimeCurrent, setProgressTimeCurrent] = useState(0);
    const [progressTimeDuration, setProgressTimeDuration] = useState(0);

    const swiperSlideTo = (val) => {
        setSpinning(true);
        childRef.current.slideTo(val);
    }

    const swiperSlideEnd = (key) => {
        videoPlayKey(key)
        // videoPlay();
    }

    const formatRouterSlideToSwiper = (router) => {
        if(!router) return;
        const key = Number(router.split('?gid=')[1]);
        videoPlayNext(key-1)
    }

    const videoPlayNext = (key) => {
        videoPlayKey(key)
        swiperSlideTo(key)
    }
    const videoPlayKey = (key) => {
        setVideoDataKey(key)
        playerRef.current.src(videoData[key].src);
    }
    const videoPlay = () => {
        playerRef.current.play();
    }
    const videoPause = () => {
        playerRef.current.pause();
    }

    /* 监听路由 */
    useEffect(() => {
        formatRouterSlideToSwiper(search)
    }, [search])

    return (
        <div className="play_box">

            <SwiperContainer
                childRef={childRef}
                videoData={videoData}
                spinning={spinning}
                isShowPlayBtn={isShowPlayBtn}
                progressTimeCurrent={progressTimeCurrent}
                progressTimeDuration={progressTimeDuration}
                msgSwiperSlideEnd={swiperSlideEnd}
                msgVideoPlay={videoPlay}
                msgVideoPause={videoPause}
            >
            </SwiperContainer>
            <VideoPlayerContainer
                videoRef={videoRef}
                playerRef={playerRef}
                videoData={videoData}
                videoDataKey={videoDataKey}
                setSpinning={setSpinning}
                setVideoDataKey={setVideoDataKey}
                setIsShowPlayBtn={setIsShowPlayBtn}
                setProgressTimeCurrent={setProgressTimeCurrent}
                setProgressTimeDuration={setProgressTimeDuration}
                msgVideoEnded={videoPlayNext}
            >
            </VideoPlayerContainer>
            <Anthology videoData={videoData} videoDataKey={videoDataKey} AnthologyClick={videoPlayNext}></Anthology>
        </div>
    )
}

export default PlayPage;