import React, {useState, useEffect, useRef} from "react";
import {Outlet} from 'react-router-dom';
import StoreContext from "../store/StoreContext"

import {Layout} from "antd"
const {Content} = Layout;

import "./Layout.less";

import HeaderContainer from "./components/Header/HeaderContainer";

const LayoutContainer = () => {

    const [storeContextData, setStoreContextData] = useState({
        testNum: 10,
        testItems: [],
        setSlideTo: (ref, val)=>{
            console.log(ref, val)
        }
    });

    return (
        <StoreContext.Provider value={{...storeContextData}}>
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