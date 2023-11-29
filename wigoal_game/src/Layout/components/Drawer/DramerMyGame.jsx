import React, {useState, useRef} from 'react';

import {Button, Drawer, Tabs} from "antd";
import './Drawer.less'

const DrawerContainer = (props) => {

    const {openSwitch, onClose, tabsActive, setTabsActive} = props;

    return (
        <Drawer
            className="container_drawer black"
            title="My games"
            placement="right"
            size={'large'}
            onClose={onClose}
            open={openSwitch}
        >
            i am Dramer My Game page
        </Drawer>
    )
}

export default DrawerContainer;