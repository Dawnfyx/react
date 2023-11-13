import React, { Component } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
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
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/details" element={<Details />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/layout" element={<Layout />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
