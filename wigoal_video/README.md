# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# 项目需求
1. 视频播放页面
2. 锁
3. 付费
4. 点赞


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
// Input: {
// activeBg: '373952',
// activeBorderColor: '373952',
// hoverBg: '373952',
// hoverBorderColor: '373952',
// },
}
}}



