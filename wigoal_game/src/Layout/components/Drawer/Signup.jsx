import React, {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";

import { Select } from 'antd';

import './Signup.less'

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

                <div className="item_about">
                    <a target="_blank" rel="noopener noreferrer" href="https://about.crazygames.com">
                        <span className="link_text">About</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://advertising.crazygames.com">
                        <span className="css-1vcehaf">Advertising</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://kids.crazygames.com">
                        <span className="css-1vcehaf">Kids site</span>
                    </a>
                    <a href="https://www.crazygames.com/terms-and-conditions">
                        <span className="css-1vcehaf">Terms &amp; conditions</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://crazygames.recruitee.com/">
                        <span className="css-1vcehaf">Jobs</span>
                    </a>
                    <a href="https://www.crazygames.com/privacy-policy">
                        <span className="css-1vcehaf">Privacy</span>
                    </a>
                    <a href="https://www.crazygames.com/information-for-parents">
                        <span className="css-1vcehaf">Info for parents</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://developer.crazygames.com">
                        <span className="css-1vcehaf">Developers</span>
                    </a>
                    <a href="https://www.crazygames.com/sitemap/games">
                        <span className="css-1vcehaf">All games</span>
                    </a>
                    <span className="preferences-link">Preferences</span>
                    <span className="preferences-link">Do not sell my data</span>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;