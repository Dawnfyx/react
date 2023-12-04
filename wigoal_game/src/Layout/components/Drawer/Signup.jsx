import React, {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";

import { Select } from 'antd';

import './Signup.less'

import AboutContainer from "../About/About";

const SignupPage = () => {
    const handleChange = (e) => {
        console.log('handleChange', e)
    }

    return (
        <div className="signup_page">
            <div className="page_item">

            </div>
            <hr className="horizontal_line" style={{ margin: '0 auto',}} />
            <div className="page_item">
                {/*<div className="item_language">*/}
                {/*    <Select*/}
                {/*        defaultValue="lucy"*/}
                {/*        size="large"*/}
                {/*        onChange={handleChange}*/}
                {/*        options={[*/}
                {/*            {*/}
                {/*                value: 'Italian',*/}
                {/*                label: 'Italian',*/}
                {/*            },*/}
                {/*            {*/}
                {/*                value: 'Chinese',*/}
                {/*                label: 'Chinese',*/}
                {/*            },*/}
                {/*            {*/}
                {/*                value: 'Japanese',*/}
                {/*                label: 'Japanese',*/}
                {/*            },*/}
                {/*            {*/}
                {/*                value: 'German',*/}
                {/*                label: 'German',*/}
                {/*            },*/}
                {/*            {*/}
                {/*                value: 'English',*/}
                {/*                label: 'English',*/}
                {/*                disabled: true,*/}
                {/*            },*/}
                {/*        ]}*/}
                {/*        style={{*/}
                {/*            width: 120,*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</div>*/}

                <AboutContainer></AboutContainer>
            </div>
        </div>
    )
}

export default SignupPage;