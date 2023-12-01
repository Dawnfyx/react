import React, {useState, useRef, useEffect, useCallback} from 'react';

import {
    LoginSocialFacebook,
    LoginSocialGoogle,
    LoginSocialTwitter
} from "reactjs-social-login";

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

    // const {} = props;

    const [profile, setProfile] = useState(null);
    const [provider, setProvider] = useState(null);
    const [stepFlag, setStepFlag] = useState(false);

    const onLoginStart = useCallback(() => {
        // alert("login start");
    }, []);

    const onLogoutFailure = useCallback(() => {
        // alert("logout fail");
    }, []);

    const onLogoutSuccess = useCallback(() => {
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

    const formatProfile = () => {
        // return profile;
    }

    useEffect(() => {
        // setStepFlag(true)
    }, [])

    return (
        <div className="login_social_box">

            {/*<LoginSocialMicrosoft*/}
            {/*    client_id={REACT_APP_MICROSOFT_API_ID || ""}*/}
            {/*    redirect_uri={REDIRECT_URI}*/}
            {/*    onLoginStart={onLoginStart}*/}
            {/*    onLogoutSuccess={onLogoutSuccess}*/}
            {/*    onResolve={({ provider, data }) => {*/}
            {/*        setProvider(provider);*/}
            {/*        setProfile(data);*/}
            {/*    }}*/}
            {/*    onReject={(err) => {*/}
            {/*        console.log(err);*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <MicrosoftLoginButton/>*/}
            {/*</LoginSocialMicrosoft>*/}

            <LoginSocialFacebook
                className="btn btn_facebook"
                appId={REACT_APP_FACEBOOK_API_ID || ""}
                onLoginStart={onLoginStart}
                onLogoutSuccess={onLogoutSuccess}
                onResolve={({ provider, data }) => {
                    setStepFlag(true);
                    setProvider(provider);
                    setProfile(data);
                    console.log(provider, "provider");
                    console.log(data, "data");
                    localStorage.setItem('userInfo', JSON.stringify({provider: provider, 'data': data}));

                }}
                onReject={(err) => {
                    console.log(err);
                }}
            >
                {/*<FacebookLoginButton/>*/}
                <Button type="primary" shape="round" icon={<FacebookOutlined />}
                    style={{
                        backgroundColor: '#3374dc',
                    }}
                >Continue with Facebook</Button>
            </LoginSocialFacebook>

            <LoginSocialGoogle
                className="btn btn_google"
                client_id={REACT_APP_GOOGLE_API_ID || ""}
                onLogoutFailure={onLogoutFailure}
                onLoginStart={onLoginStart}
                onLogoutSuccess={onLogoutSuccess}
                onResolve={({ provider, data }) => {
                    setStepFlag(true);
                    setProvider(provider);
                    setProfile(data);
                    console.log(data, "data");
                    console.log(provider, "provider");
                    localStorage.setItem('userInfo', JSON.stringify({provider: provider, 'data': data}));

                }}
                onReject={(err) => {
                    console.log("hbhbdhd", err);
                }}
            >
                {/*<GoogleLoginButton/>*/}
                <Button type="primary" shape="round" icon={<GoogleOutlined />}
                    style={{
                        backgroundColor: '#ffffff',
                        color: '#262a4a',
                    }}
                >Continue with Google</Button>
            </LoginSocialGoogle>


            <LoginSocialTwitter
                className="btn btn_twitter"
                client_id={REACT_APP_TWITTER_API_ID || ""}
                client_secret={REACT_APP_TWITTER_API_SECRET || ""}
                redirect_uri={REDIRECT_URI}
                onLoginStart={onLoginStart}
                onLogoutSuccess={onLogoutSuccess}
                onResolve={({ provider, data }) => {
                    setStepFlag(true);
                    setProvider(provider);
                    setProfile(data);
                    console.log(data, "data");
                    console.log(provider, "provider");
                    localStorage.setItem('userInfo', JSON.stringify({provider: provider, 'data': data}));

                }}
                onReject={(err) => {
                    console.log(err);
                }}
            >
                {/*<TwitterLoginButton/>*/}
                <Button type="primary" shape="round" icon={<TwitterOutlined />} >Continue with Twitter</Button>
            </LoginSocialTwitter>
        </div>
    )
}

export default LoginSocialContainer;