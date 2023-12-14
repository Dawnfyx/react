import React, {useState} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './Swiper.less'
import { Pagination } from 'swiper/modules';

import PlayPage from "../Play/Play";

const SwiperContainer = () => {
    const videoInfo = [
        {
            url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
            img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
        },
        {
            url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
            img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
        },
        {
            url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
            img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
        },
        {
            url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
            img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
        },
        {
            url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
            img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
        },
    ]
    const videoOptions = {
        controls: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
            {
                src: videoInfo[0].url,
                type: 'video/mp4'
            }
        ],
        poster: videoInfo[0].img, // 你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: true,
            fullscreenToggle: true // 全屏按钮
        }
    }

    return (
        <div className="swiper_box">
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    videoInfo.map((item, index) => (
                        <SwiperSlide key={index}>
                            <PlayPage data={item} options={videoOptions}></PlayPage>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}


export default SwiperContainer;