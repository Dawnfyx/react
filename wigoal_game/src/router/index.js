import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent';

import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
const Search = asyncComponent(() => import("../pages/Search/Search"));
const Details = asyncComponent(() => import("../pages/Details/Details"));
const Category = asyncComponent(() => import("../pages/Category/Category"));


export default class RouteConfig extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route path="" element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="/page/search" element={<Search />} />
                        <Route path="/page/details" element={<Details />} />
                        <Route path="/page/category" element={<Category />} />
                        {/*<Route path="*" element={<Navigate to="home" />} ></Route>*/}
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}
