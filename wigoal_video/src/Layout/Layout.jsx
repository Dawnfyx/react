import React, {useState, useEffect, useRef} from "react";
import {Outlet} from 'react-router-dom';
import StoreContext from "../store/StoreContext"

import {Layout} from "antd"
const {Content} = Layout;

import HeaderContainer from "./components/Header/HeaderContainer";

import "./Layout.less";

const LayoutContainer = () => {
    const [storeData, setStoreData] = useState({
        testNum: 10,
        testItems: [],
    });

    return (
        <StoreContext.Provider value={{...storeData}}>
            <Layout className="container mobile">
                <HeaderContainer></HeaderContainer>
                <Content className="container_body">
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </StoreContext.Provider>
    )
}

export default LayoutContainer;