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
export const getSearchdata = (para) => request.get("/api/search" + para);  // ?words=

// 获取详情页
export const getDetailsdata = (para) => request.get("/api/details" + para); // ?gid=