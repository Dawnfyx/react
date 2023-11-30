import React, {useState, useRef} from 'react';

import {Button, Drawer, Tabs} from "antd";

import './Drawer.less';

const DrawerContainer = (props) => {

    const {openSwitch, onClose, tabsActive, setTabsActive} = props;

    const onChange = (key) => {
        console.log(key);
    };

    const onTabClick = (key) => {
    };

    return (
        <Drawer
            className="container_drawer black"
            title="My games"
            placement="right"
            size={'large'}
            onClose={onClose}
            open={openSwitch}
        >
            <Tabs
                defaultActiveKey={['1']}
                activeKey={tabsActive}
                items={[
                    {
                        key: '1',
                        label: 'Tab 1',
                        children: <div>ssss</div>
                    },
                    {
                        key: '2',
                        label: 'Tab 2',
                        children: <div>ddddd</div>
                    },
                    {
                        key: '3',
                        label: 'Tab 3',
                        children: <div>fffffff</div>
                    },
                ]}
                onTabClick={onTabClick}
                onChange={onChange}
            />
        </Drawer>
    )
}

export default DrawerContainer;