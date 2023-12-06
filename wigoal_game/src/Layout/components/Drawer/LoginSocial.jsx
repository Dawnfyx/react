import React, {useState, useRef, useEffect, useCallback} from 'react';
import {Link, useNavigate} from "react-router-dom";

import {
    LoginSocialFacebook,
    LoginSocialGoogle,
    LoginSocialTwitter
} from "reactjs-social-login";

import { GoogleLogin } from 'react-google-login';

import {
    FacebookOutlined,
    GoogleOutlined,
    TwitterOutlined
} from "@ant-design/icons";
import {Button} from "antd";

// const REDIRECT_URI = "http://localhost:3000/account/login";
const REDIRECT_URI = "";

const REACT_APP_MICROSOFT_API_ID = "";
const REACT_APP_FACEBOOK_API_ID= "362395739476949";
const REACT_APP_GOOGLE_API_ID = "235303477450-0jlibv1ip1fi1oq64l628rbmki758ksj.apps.googleusercontent.com";
// const REACT_APP_GOOGLE_API_SECRET = "AIzaSyDf4K0KnIQchv-nUQNz2764ds85GdgFgxQ";
const REACT_APP_TWITTER_API_ID = "bXh6WDJTX1RTb0xxenMtcEhvMkc6MTpjaQ";
const REACT_APP_TWITTER_API_SECRET = "sisWhqLOhrs43sRIbKESazRW872sDXWuPC8XuaPVboWhS5oYo4";



const LoginSocialContainer = (props) => {

    const {onClose} = props;

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


    const goback = () => {
        // setStepFlag(false)
    }

    const goBackPre = () => {
        // window.history.back();
        window.location = window.location.origin;
    }

    const handleRegister = () => {
        // goBackPre();
        window.location = window.location.origin;
    }


    const onLoginClick = () => {
        if(window.FB){
            window.FB.login((item) => {
                localStorage.setItem('userInfo', JSON.stringify({provider: 'Facebook', 'data': item}));

                setTimeout(() => {
                    onClose()
                    navigate('')
                }, 800);
            });
        }
    };

    useEffect(() => {
        window.fbAsyncInit = () => {
            window.FB.init({
                appId            : REACT_APP_FACEBOOK_API_ID,
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v13.1'
            });
        };
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

            <div className="btn btn_facebook">
                <Button type="primary"  shape="round" icon={<FacebookOutlined />}
                        style={{
                            backgroundColor: '#3374dc',
                        }}
                        onClick={onLoginClick}
                >Continue with Facebook</Button>
            </div>

            <div className="btn btn_google">
                <GoogleLogin
                    clientId={REACT_APP_GOOGLE_API_ID} // 替换成你的 Google Client ID
                    onSuccess={(res)=>{
                        localStorage.setItem('userInfo', JSON.stringify({provider: 'Google', 'data': res}));
                        setTimeout(() => {
                            onClose()
                            navigate('')
                        }, 800);
                    }}
                    onFailure={(err)=>{
                        console.log("登录失败")
                        console.log(err)
                    }}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                        <Button type="primary" shape="round" icon={<GoogleOutlined/>}
                                onClick={renderProps.onClick}
                                style={{
                                    backgroundColor: '#ffffff',
                                    color: '#262a4a',
                                }}
                        >Continue with Google</Button>
                    )}
                >
                </GoogleLogin>
            </div>

        </div>
    )
}

export default LoginSocialContainer;