# 短视频播放器

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

### `npm run build`

### `npm run eject`

# 项目需求

一、 视频播放页面

二、视频滑动

- [x] 把原生的去掉绑定到目前的
- [x] 本质是一张图片 遮罩层
- [x] 点击播放的时候遮罩层隐藏开始播放
- [x] 切换的时候遮罩层显示播放暂停
- [ ] 视频播放完成后接下一个
- [ ] 选集播放视频
- [ ] 最顶和最后滑动有个提示
- [ ] todo
- [ ] todo

三、锁 (目前没有锁，没有付费功能但是要预留)

四、付费

五、点赞

```text
theme={{
    token: {
        colorPrimary: '#6842ff',
        colorPrimaryHover: '#A48EFF',
        colorText: '#FFFFFF',
        colorTextPlaceholder: '#AAADBE',
        colorLink: '#FFFFFF',
        fontFamily: 'Nunito,Arial,"Helvetica Neue",Helvetica,sans-serif',
    },
    components: {
        Layout: {
            bodyBg: '#0C0D14', //test
            headerBg: '#212233',
            siderBg: '#0C0D14',
        },
        Card: {
            colorBgContainer: '#1D1E25',
            colorBorderSecondary: '#1F2030',
            colorText: '#373952',
            colorTextHeading: '#373952',
            colorTextDescription: '#373952',
        },
        Menu: {
            darkItemBg: '#0C0D14',
            darkItemHoverBg: '#0C0D14',
            darkItemSelectedBg: '#0C0D14',
            darkItemSelectedColor: '#8668FF',
            activeBarWidth: 6,
            activeBarBorderWidth: 6,
            collapsedIconSize: 20,
            iconSize: 20,
        },
        Modal: {
            contentBg: '#212233',
        },
        Message: {
            contentBg: '#212233',
        },
        Input: {
            activeBg: '373952',
            activeBorderColor: '373952',
            hoverBg: '373952',
            hoverBorderColor: '373952',
        },
    }
}}
```

```text
swiper.js 事件：
- onInit：在swiper初始化完成时触发。
- onSlideChangeStart：在swiper切换开始时触发。
- onSlideChangeEnd：在swiper切换结束时触发。
- onTouchStart：在swiper在触摸开始时触发。
- onTouchMove：在swiper在触摸移动时触发。
- onTouchEnd：在swiper在触摸结束时触发。
- onResize：在swiper容器大小改变时触发。
- onProgress：在swiper切换进度改变时触发。
- onSlideClick：在swiper滑块被点击时触发。
- onDoubleTap：在swiper被双击时触发。
- onTouchMoveStart：在swiper在触摸开始时触发。
- onTouchMoveEnd：在swiper在触摸结束时触发。
- onTouchMoveStart：在swiper在触摸开始时触发。
```

```text
video.js 事件：
- loadstart : 当视频开始加载时触发。
- progress : 当视频加载进度发生变化时触发。
- play : 当视频开始播放时触发。
- pause : 当视频暂停时触发。
- ended : 当视频播放结束时触发。
- error : 当视频播放出现错误时触发。
- timeupdate : 当视频播放时间发生变化时触发。
- volumechange : 当视频音量发生变化时触发。
- fullscreenchange : 当视频全屏模式发生变化时触发。
- controlschange : 当视频控制栏显示或隐藏时触发。
- seeking : 当视频正在缓冲时触发。
- seeked : 当视频缓冲完成时触发。
- canplay : 当视频可以播放时触发。
- canplaythrough : 当视频可以完整播放时触发。
- waiting : 当视频正在缓冲时触发。
- playthroughend : 当视频播放到结尾时触发。
- ratechange : 当视频播放速度发生变化时触发。
- volumechange : 当视频音量发生变化时触发。
- mutedchange : 当视频静音状态发生变化时触发。
- captionschange : 当视频字幕状态发生变化时触发。
- audiotrackchange : 当视频音轨状态发生变化时触发。
- posterchange : 当视频海报发生变化时触发。
- dimensionschange : 当视频尺寸发生变化时触发。
- readyStatechange : 当视频状态发生变化时触发。
- networkstatechange : 当视频网络状态发生变化时触发。
- playbackratechange : 当视频播放速度发生变化时触发。
- playbackqualitychange : 当视频播放质量发生变化时触发。
- playbackerror : 当视频播放出现错误时触发。
- audioprocess : 当视频音频处理发生变化时触发。
- videoprocess : 当视频视频处理发生变化时触发。
- audiotrackchange : 当视频音轨发生变化时触发。
- texttrackchange : 当视频字幕发生变化时触发。
- cuechange : 当视频提示发生变化时触发。
- load : 当视频加载完成时触发。
- unload : 当视频卸载时触发。
- error : 当视频播放出现错误时触发。
- abort : 当视频播放被中断时触发。
- suspend : 当视频播放被暂停时触发。
- resume : 当视频播放被恢复时触发。
- seek : 当视频播放位置发生变化时触发。
- ended : 当视频播放结束时触发。
- play : 当视频开始播放时触发。
- pause : 当视频暂停时触发。
- timeupdate : 当视频播放时间发生变化时触发。
- volumechange : 当视频音量发生变化时触发。
- fullscreenchange : 当视频全屏模式发生变化时触发。
- controlschange : 当视频控制栏显示或隐藏时触发。
- seeking : 当视频正在缓冲时触发。
- seeked : 当视频缓冲完成时触发。
- canplay : 当视频可以播放时触发。
- canplaythrough : 当视频可以完整播放时触发。
- waiting : 当视频正在缓冲时触发。
- playthroughend : 当视频播放到结尾时触发。
- ratechange : 当视频播放速度发生变化时触发。
- volumechange : 当视频音量发生变化时触发。
- mutedchange : 当视频静音状态发生变化时触发。
- captionschange : 当视频字幕状态发生变化时触发。
- audiotrackchange : 当视频音轨状态发生变化时触发。
- posterchange : 当视频海报发生变化时触发。
- dimensionschange : 当视频尺寸发生变化
```



