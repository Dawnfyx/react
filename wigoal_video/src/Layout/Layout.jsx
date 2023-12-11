import React, {useState, useEffect, useRef} from "react";
import {Outlet} from 'react-router-dom';
import StoreContext from "../store/StoreContext"

import {Layout} from "antd"

const {Header, Content} = Layout;

const LayoutContainer = () => {
    const [storeData, setStoreData] = useState({
        testNum: 10,
        testItems: [],
    });

    return (
        <StoreContext.Provider value={{...storeData}}>
            <Layout>
                <Outlet></Outlet>
            </Layout>
        </StoreContext.Provider>
    )
}

export default LayoutContainer;