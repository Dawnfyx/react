import request from "../utils/request";

let view_type = window.law_template; // 判断模板类型
// view_type = 2;
view_type = 6;

// 首页数据
// /api/home.json?template=6
//
// 详情页数据
// /api/details?gid=10072&recommend=8
//
// 搜索页数据
// /api/search?words=world&recommend=6&result=4
//
// tingo.fun

// 首页数据接口
let base = (para) => {
    switch(para){
        case 1 :
            return "/api/home.json";
        case 2 :
            return "/api/home.json?template=2";
        case 3 :
            return "/api/home.json?template=3";
        case 6 :
            return "/api/home.json?template=6";
        default :
            return "/api/home.json";
    }
}

// 获取首页
export const getHomedata = () => request.get(base(view_type));

// 获取类别页面
export const getCatedata = (para) => request.get("/api/category" + para); // ?type=

// 获取搜索页
export const getSearchdata = (para) => request.get("/api/search" + para + "&recommend=12");  // ?words=

// 获取详情页
export const getDetailsdata = (para) => request.get("/api/details" + para + "&recommend=12"); // ?gid=

/**
 * {
 *     "host": "test.ads-goal.com", //网站域名，window.location.hostname
 *     "userId": "793878347", //账户唯一ID
 *     "accountType": 1 //1为google账户，2为facebook账户，3为twitter账户，4为注册账户
 * }
 * @param data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const getUserData = (data) => request.post("/api/getud", data, {
    headers: {
        'Content-Type': 'application/json'
    }
});


/**
 * {
 *     "host": "test.ads-goal.com", //网站域名，window.location.hostname
 *     "userId": "793878347", //账户唯一ID
 *     "accountType": 1, //1为google账户，2为facebook账户，3为twitter账户，4为注册账户
 *     "data": "{\"test\":1}" //用户数据，字符串类型
 * }
 * @param data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const setUserData = (data) => request.post("/api/setud", data, {
    headers: {
        'Content-Type': 'application/json'
    }
});

