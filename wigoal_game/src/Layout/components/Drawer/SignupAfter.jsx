import React, {useState, useEffect, useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";

import { Select } from 'antd';

import userimg from "../../../assets/userimg/9.png";

import './Signup.less'

import AboutContainer from "../About/About";

const SignupAfterPage = (props) => {

    const {onClose} = props;

    const navigate = useNavigate();

    const handleChange = (e) => {
        console.log('handleChange', e)
    }

    const handleLoginInfo = (e) => {
        return JSON.parse(window.localStorage.getItem('userInfo'))
    }

    const handleLogout = (e) => {
        window.localStorage.removeItem('userInfo');
        setTimeout(() => {
            onClose()
            navigate('')
        }, 800);
    }

    return (
        <div className="signup_page">
            <div className="page_item">
                <div className="user_head_box">
                    <div className="user_head_img">
                        <div className="user_head_img_circular">
                            <img src={userimg} alt=""/>
                        </div>
                    </div>
                    <div className="user_head_text">
                        { handleLoginInfo().data.name? handleLoginInfo().data.name : handleLoginInfo().provider + ' User'}
                    </div>
                    <div className="user_head_info">
                        {/*<button className="css-oj4imb" type="button">*/}
                        {/*    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true" className="css-6qu7l6">*/}
                        {/*        <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"*/}
                        {/*              d="M6.08194 19.9771H17.9181C17.4451 17.1282 14.981 15 12 15C9.01897 15 6.55491 17.1282 6.08194 19.9771ZM4 20.9771C4 16.5223 7.58876 13 12 13C16.4112 13 20 16.5223 20 20.9771C20 21.5294 19.5523 21.9771 19 21.9771H5C4.44772 21.9771 4 21.5294 4 20.9771Z"></path>*/}
                        {/*        <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"*/}
                        {/*              d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z"></path>*/}
                        {/*    </svg>*/}
                        {/*    My profile*/}
                        {/*</button>*/}
                        {/*<button className="css-oj4imb" type="button">*/}
                        {/*    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true" className="css-6qu7l6">*/}
                        {/*        <path fillRule="evenodd" clipRule="evenodd"*/}
                        {/*              d="M19.6856 4.31439C19.2503 3.87913 18.5446 3.87913 18.1094 4.31439L8.9578 13.466V15.0422H10.534L19.6856 5.89061C20.1209 5.45535 20.1209 4.74965 19.6856 4.31439ZM16.7037 2.9087C17.9153 1.6971 19.8797 1.6971 21.0913 2.9087C22.3029 4.1203 22.3029 6.0847 21.0913 7.2963L11.6486 16.739C11.4622 16.9254 11.2094 17.0301 10.9457 17.0301H7.96382C7.41487 17.0301 6.96985 16.5851 6.96985 16.0362V13.0543C6.96985 12.7906 7.07458 12.5378 7.26098 12.3514L16.7037 2.9087ZM5.97588 6.09647C4.87797 6.09647 3.98794 6.9865 3.98794 8.08441V18.0241C3.98794 19.122 4.87797 20.0121 5.97588 20.0121H15.9156C17.0135 20.0121 17.9035 19.122 17.9035 18.0241V15.0422C17.9035 14.4932 18.3485 14.0482 18.8975 14.0482C19.4465 14.0482 19.8915 14.4932 19.8915 15.0422V18.0241C19.8915 20.2199 18.1114 22 15.9156 22H5.97588C3.78006 22 2 20.2199 2 18.0241V8.08441C2 5.88859 3.78006 4.10853 5.97588 4.10853H9.95177C10.5007 4.10853 10.9457 4.55354 10.9457 5.1025C10.9457 5.65145 10.5007 6.09647 9.95177 6.09647H5.97588Z"></path>*/}
                        {/*    </svg>*/}
                        {/*    Edit profile*/}
                        {/*</button>*/}
                        {/*<button className="css-oj4imb" type="button">*/}
                        {/*    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true" className="css-6qu7l6">*/}
                        {/*        <path fillRule="evenodd" clipRule="evenodd"*/}
                        {/*              d="M9.35285 4.08139C10.0266 1.3062 13.9734 1.3062 14.6471 4.08139C14.7628 4.5579 15.3088 4.78402 15.7275 4.52888C18.1662 3.04293 20.9571 5.83376 19.4711 8.27251C19.216 8.69125 19.4421 9.23717 19.9186 9.35285C22.6938 10.0266 22.6938 13.9734 19.9186 14.6471C19.4421 14.7628 19.216 15.3088 19.4711 15.7275C20.9571 18.1662 18.1662 20.9571 15.7275 19.4711C15.3088 19.216 14.7628 19.4421 14.6471 19.9186C13.9734 22.6938 10.0266 22.6938 9.35285 19.9186C9.23717 19.4421 8.69125 19.216 8.27252 19.4711C5.83376 20.9571 3.04293 18.1662 4.52889 15.7275C4.78402 15.3088 4.5579 14.7628 4.08139 14.6471C1.3062 13.9734 1.3062 10.0266 4.08139 9.35285C4.5579 9.23717 4.78402 8.69125 4.52888 8.27251C3.04293 5.83376 5.83376 3.04293 8.27252 4.52888C8.69125 4.78402 9.23717 4.55789 9.35285 4.08139ZM12.7036 4.55323C12.5245 3.81559 11.4755 3.81559 11.2964 4.55322C10.8612 6.34596 8.80726 7.19673 7.23186 6.23681C6.58365 5.84185 5.84185 6.58364 6.23681 7.23185C7.19673 8.80726 6.34596 10.8612 4.55322 11.2964C3.81559 11.4755 3.81559 12.5245 4.55323 12.7036C6.34596 13.1388 7.19673 15.1927 6.23682 16.7681C5.84186 17.4164 6.58365 18.1581 7.23186 17.7632C8.80726 16.8033 10.8612 17.654 11.2964 19.4468C11.4755 20.1844 12.5245 20.1844 12.7036 19.4468C13.1388 17.654 15.1927 16.8033 16.7681 17.7632C17.4164 18.1581 18.1581 17.4164 17.7632 16.7681C16.8033 15.1927 17.654 13.1388 19.4468 12.7036C20.1844 12.5245 20.1844 11.4755 19.4468 11.2964C17.654 10.8612 16.8033 8.80726 17.7632 7.23185C18.1581 6.58364 17.4164 5.84185 16.7681 6.23682C15.1927 7.19673 13.1388 6.34596 12.7036 4.55323ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"></path>*/}
                        {/*    </svg>*/}
                        {/*    Account settings*/}
                        {/*</button>*/}
                        {/*<button type="button" onClick={handleLogout}>*/}
                        {/*    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true" className="css-6qu7l6">*/}
                        {/*        <path fillRule="evenodd" clipRule="evenodd"*/}
                        {/*              d="M6 5C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19H10C11.1046 19 12 18.1046 12 17V16C12 15.4477 12.4477 15 13 15C13.5523 15 14 15.4477 14 16V17C14 19.2091 12.2091 21 10 21H6C3.79086 21 2 19.2091 2 17V7C2 4.79086 3.79086 3 6 3H10C12.2091 3 14 4.79086 14 7V8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8V7C12 5.89543 11.1046 5 10 5H6ZM16.2929 7.29289C16.6834 6.90237 17.3166 6.90237 17.7071 7.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L17.7071 16.7071C17.3166 17.0976 16.6834 17.0976 16.2929 16.7071C15.9024 16.3166 15.9024 15.6834 16.2929 15.2929L18.5858 13L7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11L18.5858 11L16.2929 8.70711C15.9024 8.31658 15.9024 7.68342 16.2929 7.29289Z"></path>*/}
                        {/*    </svg>*/}
                        {/*    Log out*/}
                        {/*</button>*/}
                    </div>
                </div>
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

export default SignupAfterPage;