import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent';

import Layout from "../Layout/Layout";
import Swiper from "../pages/Swiper/Swiper";
import Test from "../pages/Test/Test";
import TestVideo from "../pages/Test/TestVideo";
// const Search = asyncComponent(() => import("../pages/Search/Search"));
// const Details = asyncComponent(() => import("../pages/Details/Details"));
// const Category = asyncComponent(() => import("../pages/Category/Category"));


export default class RouteConfig extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route path="" element={<Swiper />} />
                        <Route path="test" element={<Test />} />
                        <Route path="testplay" element={<TestVideo />} />
                        {/*<Route path="/page/details" element={<Details />} />*/}
                        {/*<Route path="/page/category" element={<Category />} />*/}
                        {/*<Route path="*" element={<Navigate to="home" />} ></Route>*/}
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}
