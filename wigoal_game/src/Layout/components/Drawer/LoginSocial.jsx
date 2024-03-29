import React, {useState, useRef, useEffect, useCallback} from 'react';
import { connect } from 'react-redux';
import {Link, useNavigate} from "react-router-dom";

import {
    FacebookOutlined,
    GoogleOutlined,
    TwitterOutlined
} from "@ant-design/icons";
import {Button, message} from "antd";

import {
    LoginSocialFacebook,
    LoginSocialGoogle,
    LoginSocialTwitter
} from "reactjs-social-login";

import { GoogleLogin } from 'react-google-login';

import googleSvg from "../../../assets/img/google.svg";


import {getUserId, getAccountType} from "../../../utils/mixin";
import {getUserData} from "../../../api";

// const REDIRECT_URI = "http://localhost:3000/account/login";
const REDIRECT_URI = "";

const REACT_APP_MICROSOFT_API_ID = "";
// const REACT_APP_FACEBOOK_API_ID= "341369151843691";
const REACT_APP_FACEBOOK_API_ID= "3683958525216271";
const REACT_APP_GOOGLE_API_ID = "48801388645-iir73djli3h150dq4it8crdkmmge6jr9.apps.googleusercontent.com";
const REACT_APP_GOOGLE_API_SECRET = "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";
const REACT_APP_TWITTER_API_ID = "bXh6WDJTX1RTb0xxenMtcEhvMkc6MTpjaQ";
const REACT_APP_TWITTER_API_SECRET = "sisWhqLOhrs43sRIbKESazRW872sDXWuPC8XuaPVboWhS5oYo4";


const LoginSocialContainer = (props) => {

    const {onClose, getLoginInfo, setLoginInfo} = props;

    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate();

    const [profile, setProfile] = useState(null);
    const [provider, setProvider] = useState(null);
    const [stepFlag, setStepFlag] = useState(false);

    const onLoginStart = useCallback(() => {
        console.log("开始登录")
        // alert("login start");
    }, []);

    const onLogoutFailure = useCallback(() => {
        // alert("logout fail");
    }, []);

    const onLogoutSuccess = useCallback(() => {
        console.log("授权登录成功")
        setProfile(null);
        setProvider(null);
        // alert("logout success");
    }, []);

    const handleResolve = (provider, data) => {
        setStepFlag(true);
        setProvider(provider);
        setProfile(data);
        console.log(provider, "provider");
        console.log(data, "data");
        localStorage.setItem('userInfo', JSON.stringify({provider: provider, 'data': data}));

        let requestJSON = JSON.stringify({
            "host": window.location.hostname,
            "userId": getUserId(provider, data), //账户唯一ID
            "accountType": getAccountType(provider, data), //1为google账户，2为facebook账户，3为twitter账户，4为注册账户
        })
        getUserData(requestJSON).then(res =>{
            console.log("getUserData", res.data)
            window.localStorage.setItem('MyGames', res.data)
        }).catch(err => {
            console.log("getUserData", err)
        })

        setTimeout(() => {
            onClose()
            navigate('')
        }, 800);
    }

    const handleResolve2 = (provider, data) => {
        const random12DigitNumber = Math.floor(100000000000 + Math.random() * 900000000000);
        function generateRandomName() {
            var adjectives = ["Happy", "Sunny", "Brave", "Clever", "Gentle", "Kind"];

            var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
            var random6DigitNumber =  Math.floor(100000 + Math.random() * 900000);

            return randomAdjective + random6DigitNumber;
        }

        var randomName = generateRandomName();
        let temp = {
            "provider": "facebook",
            "data": {
                "userID": random12DigitNumber,
                "id": random12DigitNumber,
                "name": randomName,
            }
        }
        console.log(getLoginInfo, 'getLoginInfo')
        setLoginInfo(temp)
    }

    const handleRegister = () => {
        window.location = window.location.origin;
    }

    const registerWarning = (err) => {
        if(err.message){
            err = err.message
        } else {
            err = 'login error'
        }
        messageApi.open({
            type: 'warning',
            content: err,
        });
    };


    // const onLoginClick = () => {
    //     if(window.FB){
    //         window.FB.login((item) => {
    //             localStorage.setItem('userInfo', JSON.stringify({provider: 'Facebook', 'data': item}));
    //
    //             setTimeout(() => {
    //                 onClose()
    //                 navigate('')
    //             }, 800);
    //         });
    //     }
    // };

    useEffect(() => {
        // window.fbAsyncInit = () => {
        //     window.FB.init({
        //         appId            : REACT_APP_FACEBOOK_API_ID,
        //         autoLogAppEvents : true,
        //         xfbml            : true,
        //         version          : 'v13.1'
        //     });
        // };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }, [])



    return (
        <div className="login_social_box">

            {/*<Button type="primary" shape="round" icon={<TwitterOutlined/>}*/}
            {/*        style={{*/}
            {/*            backgroundColor: '#3374dc',*/}
            {/*        }}*/}
            {/*        onClick={() => handleResolve2()}*/}
            {/*>test btn</Button>*/}
            {/*<br/>*/}
            {/*{*/}
            {/*    JSON.stringify(getLoginInfo)*/}
            {/*}*/}
            {/*<br/>*/}

            <LoginSocialFacebook
                className="btn btn_facebook"
                appId={REACT_APP_FACEBOOK_API_ID || ""}
                onLoginStart={onLoginStart}
                onLogoutSuccess={onLogoutSuccess}
                onResolve={({ provider, data }) => {
                    handleResolve(provider, data);
                }}
                onReject={(err) => {
                    console.log("Facebook login Error:", err);
                    registerWarning(err)
                }}
            >
                {/*<FacebookLoginButton/>*/}
                <Button type="primary" shape="round" icon={<FacebookOutlined />}
                    style={{
                        backgroundColor: '#3374dc',
                        display: 'none'
                    }}
                >Continue with Facebook</Button>
            </LoginSocialFacebook>

            {/*<div className="btn btn_facebook">*/}
            {/*    <Button type="primary"  shape="round" icon={<FacebookOutlined />}*/}
            {/*            style={{*/}
            {/*                backgroundColor: '#3374dc',*/}
            {/*            }}*/}
            {/*            onClick={onLoginClick}*/}
            {/*    >Continue with Facebook</Button>*/}
            {/*</div>*/}

            <LoginSocialGoogle
                className="btn btn_google"
                client_id={REACT_APP_GOOGLE_API_ID || ""}
                onLogoutFailure={onLogoutFailure}
                onLoginStart={onLoginStart}
                onLogoutSuccess={onLogoutSuccess}
                onResolve={({ provider, data }) => {
                    handleResolve(provider, data);
                }}
                onReject={(err) => {
                    console.log("Google login Error:", err);
                    registerWarning(err)
                }}
            >
                {/*<GoogleLoginButton/>*/}
                <Button type="primary" shape="round" icon={
                    <svg width={20} height={20} style={{ transform: 'translateY(4px)'}}>
                        <image href={googleSvg} style={{ width: '20px', height: '20px'}} />
                    </svg>
                }
                    style={{
                        backgroundColor: '#ffffff',
                        color: '#262a4a',
                    }}
                >Continue with Google</Button>
            </LoginSocialGoogle>

            {/*<div className="btn btn_google">*/}
            {/*    <GoogleLogin*/}
            {/*        clientId={REACT_APP_GOOGLE_API_ID} // 替换成你的 Google Client ID*/}
            {/*        onSuccess={(res)=>{*/}
            {/*            localStorage.setItem('userInfo', JSON.stringify({provider: 'Google', 'data': res}));*/}
            {/*            setTimeout(() => {*/}
            {/*                onClose()*/}
            {/*                navigate('')*/}
            {/*            }, 800);*/}
            {/*        }}*/}
            {/*        onFailure={(err)=>{*/}
            {/*            console.log(err)*/}
            {/*        }}*/}
            {/*        cookiePolicy={'single_host_origin'}*/}
            {/*        render={renderProps => (*/}
            {/*            <Button type="primary" shape="round" icon={<GoogleOutlined/>}*/}
            {/*                    onClick={renderProps.onClick}*/}
            {/*                    style={{*/}
            {/*                        backgroundColor: '#ffffff',*/}
            {/*                        color: '#262a4a',*/}
            {/*                    }}*/}
            {/*            >Continue with Google</Button>*/}
            {/*        )}*/}
            {/*    >*/}
            {/*    </GoogleLogin>*/}
            {/*</div>*/}

            {contextHolder}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        getLoginInfo: state.login.loginInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginInfo: (value) => dispatch({ type: 'SET_LOGIN_INFO',value: value}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSocialContainer);



