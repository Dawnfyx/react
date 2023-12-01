import React, {useState, useEffect, useCallback, useRef} from 'react';

import {Button, Divider, Space} from 'antd';

import './Login.less'

import LoginSocial from './LoginSocial'

import favicon from "../../../assets/img/logo.png";

const LoginPage = () => {

    return (
        <div className="login_page">
            <div className="login_content">
                <div className="login_title">
                    Log&nbsp;in
                </div>
                <div className="login_body">

                    <LoginSocial></LoginSocial>

                    <Divider plain>OR</Divider>
                    <div className="input_box">
                            <span className="input_text">
                                <input type="text" placeholder="Email" />
                                {/*<span className="input_border"></span>*/}
                            </span>
                    </div>
                    <div className="input_box">
                            <span className="input_text">
                                <input type="password" placeholder="Enter your password" />
                                {/*<span className="input_border"></span>*/}
                            </span>
                    </div>
                    <div className="login_btn_box">
                        <button id="sign_in" className="login_btn" type="submit">
                            <span className="login_btn_text">Log in</span>
                        </button>
                        {/*<div id="sign_in_register" className="login_btn">*/}
                        {/*    <span className="login_btn_text">Log in</span>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;