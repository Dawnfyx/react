# 短视频播放器

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

### `npm run build`

### `npm run eject`

## 项目目标

一、视频播放页面

二、视频滑动

三、锁 (目前没有锁，没有付费功能但是要预留)

四、付费

五、点赞

六、视频详情页面

## 功能开发
- [x] 滑动效果
- [x] 视频播放效果
- [x] 播放器原生组件的去掉隐藏 绑定假的
- [x] 滑动遮罩层
- [x] 点击播放的时候遮罩层隐藏开始播放
- [x] 切换的时候遮罩层显示播放暂停
- [x] 视频播放完成后接下一个
- [x] 选集播放视频
- [x] 全部视频播放完 (播放完一直循环)
- [ ] 全屏问题
- [ ] 视频播放失败的问题 是因为视频没加载到 播放器就开始执行播放
- [ ] 兼容
- [x] 详情页
- [x] 加个title
- [ ] 锁 选集的锁好了，还有播放的锁
- [ ] 登录


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
-  activeIndexChange ：当活动索引改变时触发。 
-  afterInit ：在初始化后立即触发。 
-  beforeDestroy ：在 Swiper 销毁之前触发。 
-  beforeInit ：在初始化之前触发。 
-  beforeLoopFix ：在进行 "loop fix" 之前触发。 
-  beforeResize ：在调整大小处理程序之前触发。 
-  beforeSlideChangeStart ：在滑动切换开始之前触发。 
-  beforeTransitionStart ：在过渡开始之前触发。 
-  breakpoint ：在断点改变时触发。 
-  changeDirection ：在方向改变时触发。 
-  click ：当用户点击 Swiper 时触发。 
-  destroy ：在 Swiper 销毁时触发。 
-  doubleClick ：当用户双击 Swiper 时触发。 
-  doubleTap ：当用户双击 Swiper 容器时触发。 
-  fromEdge ：当 Swiper 到达开始或结束位置时触发。 
-  init ：在 Swiper 初始化后立即触发。 
-  lock ：当 Swiper 被锁定时触发。 
-  loopFix ：在 "loop fix" 之后触发。 
-  momentumBounce ：在动量反弹时触发。 
-  observerUpdate ：如果启用了观察器并检测到 DOM 变化时触发。 
-  orientationchange ：在方向改变时触发。 
-  progress ：当 Swiper 进度改变时触发。 
-  reachBeginning ：当 Swiper 到达开始位置时触发。 
-  reachEnd ：当 Swiper 到达最后一张幻灯片时触发。 
-  realIndexChange ：在真实索引改变时触发。 
-  resize ：在窗口调整大小之前触发。 
-  setTransition ：每次开始动画时触发。 
-  setTranslate ：当 Swiper 的包装器位置改变时触发。 
-  slideChange ：当当前活动幻灯片改变时触发。 
-  slideChangeTransitionEnd ：在切换动画结束后触发。 
-  slideChangeTransitionStart ：在切换动画开始时触发。 
-  slideNextTransitionEnd ：仅在 "向前" 方向的切换动画结束时触发。 
-  slideNextTransitionStart ：仅在 "向前" 方向的切换动画开始时触发。 
-  slidePrevTransitionEnd ：仅在 "向后" 方向的切换动画结束时触发。 
-  slidePrevTransitionStart ：仅在 "向后" 方向的切换动画开始时触发。 
-  slideResetTransitionEnd ：在将幻灯片重置为当前幻灯片的动画结束时触发。 
-  slideResetTransitionStart ：在将幻灯片重置为当前幻灯片的动画开始时触发。 
-  sliderFirstMove ：在首次触摸/拖动移动时触发。 
-  sliderMove ：当用户触摸并在 Swiper 上移动手指时触发。 
-  slidesGridLengthChange ：当幻灯片网格发生变化时触发。 
-  slidesLengthChange ：当幻灯片数量发生变化时触发。 
-  slidesUpdated ：在幻灯片和它们的大小计算和更新之后触发。 
-  snapGridLengthChange ：当快照网格发生变化时触发。 
-  snapIndexChange ：在快照索引改变时触发。 
-  tap ：当用户点击 Swiper 时触发。 
-  toEdge ：当 Swiper 到达开始或结束位置时触发。 
-  touchEnd ：当用户释放 Swiper 时触发。 
-  touchMove ：当用户触摸并在 Swiper 上移动手指时触发。 
-  touchMoveOpposite ：当用户触摸并在 Swiper 上移动手指，但移动方向与参数中指定的方向相反时触发。 
-  touchStart ：当用户触摸 Swiper 时触发。 
-  transitionEnd ：在过渡结束后触发。 
-  transitionStart ：在过渡开始时触发。 
-  unlock ：当 Swiper 解锁时触发。 
-  update ：在调用 swiper.update() 后触发。 

详情看文档
https://swiperjs.com/element#events
https://swiperjs.com/swiper-api#events

element 包很多事件没有！！！！！ 艹

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
```



