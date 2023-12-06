export default methods => {
  return target => {
    Object.assign(target.prototype, methods);
  }
}

/**
 * 字符串填充函数
 * @param  {string} value      目标字符串
 * @param  {array} position 需要填充的位置
 * @param  {string} padstr   填充字符串
 * @return {string}          返回目标字符串
 */
export const padStr = (value, position, padstr, inputElement) => {
  position.forEach((item, index) => {
    if (value.length > item + index) {
      value = value.substring(0, item + index) + padstr + value.substring(item + index)
    }
  })
  value = value.trim();
  // 解决安卓部分浏览器插入空格后光标错位问题
  requestAnimationFrame(() => {
    inputElement.setSelectionRange(value.length, value.length); 
  })
  return value;
}

export const browserVersion = () => {
    const userAgent = navigator.userAgent;
    let version = "";
    let browserType = "";

    if (/rv:([\d.]+)/.test(userAgent)) {
        version = userAgent.match(/rv:([\d.]+)/)[1];
        browserType = 'rv';
    } else if (/MSIE ([\d.]+)/.test(userAgent)) {
        version = userAgent.match(/MSIE ([\d.]+)/)[1];
        browserType = 'MSIE';
    } else if (/Edg\/([\d.]+)/.test(userAgent)) {
        version = userAgent.match(/Edg\/([\d.]+)/)[1];
        browserType = 'Microsoft Edge';
    } else if (/Edge\/([\d.]+)/.test(userAgent)) {
        version = userAgent.match(/Edge\/([\d.]+)/)[1];
        browserType = 'Microsoft Edge';
    } else if (/Chrome\/([\d.]+)/.test(userAgent)) {
        version = userAgent.match(/Chrome\/([\d.]+)/)[1];
        browserType = 'Chrome';
    } else if (/Firefox\/([\d.]+)/.test(userAgent)) {
        version = userAgent.match(/Firefox\/([\d.]+)/)[1];
        browserType = 'Firefox';
    } else if (/Safari\/([\d.]+)/.test(userAgent)) {
        version = userAgent.match(/Safari\/([\d.]+)/)[1];
        browserType = 'Safari';
    } else {
        version = "Unknown";
    }
    let temp = {}
    temp.version = version;
    temp.browserType = browserType;
    return temp;
}

export const MobileOrTabletLog = () => {

    // 获取 User-Agent 字符串
    const userAgent = window.navigator.userAgent;

    // 获取屏幕宽度
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // 判断是否是手机
    const isMobile = /Mobile/i.test(userAgent) && screenWidth < 768;

    // 判断是否是平板电脑
    const isTablet = /Tablet/i.test(userAgent) && (screenWidth >= 768 && screenWidth < 1024);

    if (isMobile) {
        console.log("您正在使用手机访问");
    } else if (isTablet) {
        console.log("您正在使用平板电脑访问");
    } else {
        console.log("您正在使用桌面电脑访问");
        console.log('浏览器本版：' , browserVersion().browserType, browserVersion().version);
    }
}

export const starsScore = (rate) => {
    let num = Math.floor(rate)
    return "★★★★★".slice(0,(num/2))
}

export const utilsTitleCase = (title) => {
    title = title.toLowerCase();
    let nStr = ''+ title[0].toUpperCase()
    return nStr + title.substr(1)
}

/**
 *  临时方法
 * @param e
 * @returns {boolean}
 */
export const ifUserLoginStatus = (e) => {
    return window.localStorage.getItem('userInfo') == null;
}
