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



