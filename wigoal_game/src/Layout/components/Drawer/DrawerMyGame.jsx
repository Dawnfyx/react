import React, {useState, useRef, useEffect} from 'react';
import {useLocation} from "react-router";
import {useNavigate} from "react-router-dom";

import {Button, Col, Drawer, Image, Row, Tabs} from "antd";
import {ifUserLoginStatus} from "../../../utils/mixin";

import './DrawerMyGame.less';
import LoginSocial from './LoginSocial'

const DrawerContainer = (props) => {

    const {openSwitch, onClose, tabsActive, setTabsActive} = props;
    const [likeData, setLikeData] = useState([]);
    // const [disLikeData, setDisLikeData] = useState([]);
    const [favoritesData, setFavoritesData] = useState([]);

    const navigate = useNavigate();

    const {search} = useLocation()

    const onChange = (key) => {
        console.log(key);
    };

    const onTabClick = (key) => {

    };

    const handleLink = (url) => {
        onClose()
        navigate(url)
    }

    const formatData = () => {
        if(
            typeof window.localStorage.getItem('MyGames') == 'object' ||
            !window.localStorage.getItem('MyGames') ||
            !JSON.parse(window.localStorage.getItem('MyGames')) ||
            window.localStorage.getItem('MyGames') == '{}'
        ) {
            setLikeData([]);
            // setDisLikeData([]]);
            setFavoritesData([]);
        } else {
            let ArrMap = JSON.parse(window.localStorage.getItem('MyGames'));
            let temp1 = [];
            // let temp2 = [];
            let temp3 = [];

            ArrMap.map(item => {
                if(item.like){
                    temp1.push({
                        gid: item.gid,
                        details: item.details,
                    })
                }
                // if(item.dislike){
                //     temp2.push({
                //         gid: item.gid,
                //         details: item.details,
                //     })
                // }
                if(item.favorites){
                    temp3.push({
                        gid: item.gid,
                        details: item.details,
                    })
                }
            })

            setLikeData(temp1);
            // setDisLikeData(temp2);
            setFavoritesData(temp3);
        }
    }

    const FavoritesPage = (props) => {
        const {favoritesData, onClose} = props;

        return (
            <div className="mygame_favorites_page">
                {
                    ifUserLoginStatus()
                        ? <>
                            {
                                favoritesData.length > 0
                                    ? <div className="favorites_box">
                                        <Row gutter={[10, 12]}>
                                            {
                                                favoritesData.map((item, index) => (
                                                    <Col key={index} xs={8} sm={8} md={6} lg={6}>
                                                        <div className="game_thumb_box" onClick={() => handleLink("/page/details?gid=" + item.gid)}>
                                                            <Image
                                                                className="game_thumb_box_img"
                                                                preview={false}
                                                                src={process.env.REACT_APP_BASEURL + item.details.icon}
                                                            />
                                                        </div>
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                    </div>
                                    : <>
                                        <div className="favorites_item">
                                            <svg className="favorites_svg" viewBox="0 0 120 120" focusable="false"
                                                 aria-hidden="true" width="120" height="120" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M40.2223 15C33.318 15 27.6735 16.4827 23.1717 19.1231C18.6594 21.7698 15.571 25.4186 13.5457 29.3108C9.59151 36.9098 9.62884 45.499 10.593 50.4327C13.1027 63.2751 22.0972 76.7358 31.5186 86.7905C36.2887 91.8812 41.354 96.3 46.0789 99.4881C50.5575 102.51 55.5562 105 60.0001 105C64.444 105 69.4427 102.51 73.9213 99.4881C78.6462 96.3 83.7115 91.8812 88.4816 86.7905C97.903 76.7358 106.897 63.2751 109.407 50.4327C110.371 45.499 110.409 36.9098 106.455 29.3108C104.429 25.4186 101.341 21.7698 96.8285 19.1231C92.3267 16.4827 86.6822 15 79.7779 15C74.2905 15 69.5521 17.478 65.892 20.5653C63.6296 22.4736 61.6515 24.7163 60.0001 27.0366C58.3487 24.7163 56.3706 22.4736 54.1082 20.5653C50.4481 17.478 45.7097 15 40.2223 15Z"
                                                      fill="#2F3148"></path>
                                                <defs>
                                                    <linearGradient id="paint0_linear_1861_3922" x1="60.0001" y1="15"
                                                                    x2="60.0001" y2="105" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#B634C1"></stop>
                                                        <stop offset="1" stopColor="#FF8BA7"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <div className="favorites_text">
                                                Add games to your favorites by clicking on the ♡ icon on a game page.
                                            </div>
                                        </div>
                                    </>
                            }

                        </>
                        : <>
                            <div className="favorites_item">
                                <svg className="favorites_svg" viewBox="0 0 120 120" focusable="false" aria-hidden="true"
                                     width="120" height="120" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M40.2223 15C33.318 15 27.6735 16.4827 23.1717 19.1231C18.6594 21.7698 15.571 25.4186 13.5457 29.3108C9.59151 36.9098 9.62884 45.499 10.593 50.4327C13.1027 63.2751 22.0972 76.7358 31.5186 86.7905C36.2887 91.8812 41.354 96.3 46.0789 99.4881C50.5575 102.51 55.5562 105 60.0001 105C64.444 105 69.4427 102.51 73.9213 99.4881C78.6462 96.3 83.7115 91.8812 88.4816 86.7905C97.903 76.7358 106.897 63.2751 109.407 50.4327C110.371 45.499 110.409 36.9098 106.455 29.3108C104.429 25.4186 101.341 21.7698 96.8285 19.1231C92.3267 16.4827 86.6822 15 79.7779 15C74.2905 15 69.5521 17.478 65.892 20.5653C63.6296 22.4736 61.6515 24.7163 60.0001 27.0366C58.3487 24.7163 56.3706 22.4736 54.1082 20.5653C50.4481 17.478 45.7097 15 40.2223 15Z"
                                          fill="url(#paint0_linear_1861_3922)"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear_1861_3922" x1="60.0001" y1="15" x2="60.0001"
                                                        y2="105" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#B634C1"></stop>
                                            <stop offset="1" stopColor="#FF8BA7"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <h2>
                                    Create an account to add games to your favorites
                                </h2>
                            </div>
                            <LoginSocial onClose={onClose}></LoginSocial>
                        </>

                }
            </div>
        )
    }

    const RecentPage = () => {
        return (
            <div className="mygame_recent_page">

                <div className="recent_item">
                    <svg className="recent_svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 7C12.5523 7 13 7.44772 13 8V11.5858L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V8C11 7.44772 11.4477 7 12 7Z"></path>
                    </svg>
                    <div className="recent_text">
                        All your recently played games will be listed here. Have some fun!
                    </div>
                </div>

            </div>
        )
    }

    const LikedPage = () => {
        return (
            <div className="mygame_liked_page">
                {
                    ifUserLoginStatus()
                        ? <>
                            {
                                likeData.length > 0
                                    ?   <div className="liked_box">
                                        <Row gutter={[10, 12]}>
                                            {
                                                likeData.map((item, index) => (
                                                    <Col key={index} xs={8} sm={8} md={6} lg={6}>
                                                        <div className="game_thumb_box" onClick={() => handleLink("/page/details?gid=" + item.gid)}>
                                                            <Image
                                                                className="game_thumb_box_img"
                                                                preview={false}
                                                                src={process.env.REACT_APP_BASEURL + item.details.icon}
                                                            />
                                                        </div>
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                    </div>
                                    : <div className="liked_item">
                                        <svg className="like_svg" viewBox="0 0 120 120" focusable="false" aria-hidden="true"
                                             width="120"
                                             height="120" fill="none">
                                            <path
                                                d="M12 63.125C12 61.8939 12.2419 60.6748 12.7118 59.5373C13.1817 58.3999 13.8705 57.3664 14.7389 56.4959C15.6072 55.6253 16.638 54.9348 17.7725 54.4636C18.9071 53.9925 20.123 53.75 21.351 53.75C22.579 53.75 23.795 53.9925 24.9295 54.4636C26.064 54.9348 27.0949 55.6253 27.9632 56.4959C28.8315 57.3664 29.5203 58.3999 29.9902 59.5373C30.4602 60.6748 30.702 61.8939 30.702 63.125V100.625C30.702 103.111 29.7169 105.496 27.9632 107.254C26.2095 109.012 23.8311 110 21.351 110C18.871 110 16.4925 109.012 14.7389 107.254C12.9852 105.496 12 103.111 12 100.625V63.125ZM36.9361 62.0812V96.0187C36.935 98.3416 37.5795 100.619 38.7974 102.595C40.0153 104.571 41.7583 106.168 43.8309 107.206L44.1426 107.362C47.6018 109.096 51.4156 109.999 55.2828 110H89.0462C91.9296 110.001 94.7243 109 96.9544 107.168C99.1845 105.335 100.712 102.785 101.277 99.95L108.758 62.45C109.12 60.6367 109.075 58.7656 108.629 56.9715C108.182 55.1774 107.343 53.5051 106.174 52.0751C105.005 50.645 103.533 49.4929 101.866 48.7018C100.199 47.9107 98.3777 47.5002 96.5333 47.5H74.3402V22.5C74.3402 19.1848 73.0266 16.0054 70.6884 13.6612C68.3502 11.317 65.1789 10 61.8721 10C60.2188 10 58.6331 10.6585 57.464 11.8306C56.2949 13.0027 55.6381 14.5924 55.6381 16.25V20.4187C55.6381 25.828 53.8882 31.0913 50.6509 35.4187L41.9233 47.0812C38.686 51.4087 36.9361 56.672 36.9361 62.0812Z"
                                                fill="#2F3148"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_1861_3955" x1="60.5" y1="10" x2="60.5"
                                                                y2="110" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#AA3FFF"></stop>
                                                    <stop offset="1" stopColor="#7ED1FF"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div className="like_text">
                                            Like games by clicking on the
                                            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M10.1051 3.90453C10.1051 2.84042 10.9755 2 12.0215 2H12.1183C13.7773 2 15.1446 3.33088 15.1446 5V9H18.9711C21.2014 9 22.6959 11.3321 21.6755 13.3463L18.1295 20.3463C17.6137 21.3646 16.5645 22 15.4251 22H11.3546C11.1082 22 10.8627 21.9702 10.6236 21.9112L6.93101 21H5.02628C3.36726 21 2 19.6691 2 18V12C2 10.3309 3.36726 9 5.02628 9H7.19669L9.66081 5.35177C9.95107 4.92203 10.1051 4.41848 10.1051 3.90453ZM6.05257 11H5.02628C4.44713 11 4 11.46 4 12V18C4 18.54 4.44713 19 5.02628 19H6.05257V11ZM8.05257 19.2168V11.3061L11.3182 6.47121C11.8129 5.73871 12.0857 4.88122 12.1041 4H12.1183C12.6974 4 13.1446 4.45998 13.1446 5V9H12.1183C11.566 9 11.1183 9.44772 11.1183 10C11.1183 10.5523 11.566 11 12.1183 11H18.9711C19.7534 11 20.2183 11.7971 19.8914 12.4425L16.3454 19.4425C16.1747 19.7794 15.8207 20 15.4251 20H11.3546C11.2696 20 11.185 19.9897 11.1027 19.9694L8.05257 19.2168Z"></path>
                                            </svg> icon on a game page.
                                        </div>
                                    </div>

                            }
                        </>
                        : <>
                            <div className="liked_item">
                                <svg className="like_svg" viewBox="0 0 120 120" focusable="false" aria-hidden="true"
                                     width="120" height="120" fill="none">
                                    <path
                                        d="M12 63.125C12 61.8939 12.2419 60.6748 12.7118 59.5373C13.1817 58.3999 13.8705 57.3664 14.7389 56.4959C15.6072 55.6253 16.638 54.9348 17.7725 54.4636C18.9071 53.9925 20.123 53.75 21.351 53.75C22.579 53.75 23.795 53.9925 24.9295 54.4636C26.064 54.9348 27.0949 55.6253 27.9632 56.4959C28.8315 57.3664 29.5203 58.3999 29.9902 59.5373C30.4602 60.6748 30.702 61.8939 30.702 63.125V100.625C30.702 103.111 29.7169 105.496 27.9632 107.254C26.2095 109.012 23.8311 110 21.351 110C18.871 110 16.4925 109.012 14.7389 107.254C12.9852 105.496 12 103.111 12 100.625V63.125ZM36.9361 62.0812V96.0187C36.935 98.3416 37.5795 100.619 38.7974 102.595C40.0153 104.571 41.7583 106.168 43.8309 107.206L44.1426 107.362C47.6018 109.096 51.4156 109.999 55.2828 110H89.0462C91.9296 110.001 94.7243 109 96.9544 107.168C99.1845 105.335 100.712 102.785 101.277 99.95L108.758 62.45C109.12 60.6367 109.075 58.7656 108.629 56.9715C108.182 55.1774 107.343 53.5051 106.174 52.0751C105.005 50.645 103.533 49.4929 101.866 48.7018C100.199 47.9107 98.3777 47.5002 96.5333 47.5H74.3402V22.5C74.3402 19.1848 73.0266 16.0054 70.6884 13.6612C68.3502 11.317 65.1789 10 61.8721 10C60.2188 10 58.6331 10.6585 57.464 11.8306C56.2949 13.0027 55.6381 14.5924 55.6381 16.25V20.4187C55.6381 25.828 53.8882 31.0913 50.6509 35.4187L41.9233 47.0812C38.686 51.4087 36.9361 56.672 36.9361 62.0812Z"
                                        fill="url(#paint0_linear_1861_3955)"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear_1861_3955" x1="60.5" y1="10" x2="60.5" y2="110"
                                                        gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#AA3FFF"></stop>
                                            <stop offset="1" stopColor="#7ED1FF"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <h2>
                                    Create an account to see all your liked games
                                </h2>
                            </div>
                            <LoginSocial onClose={onClose}></LoginSocial>
                        </>
                }

            </div>
        )
    }

    useEffect( () =>{
        formatData()
    }, [openSwitch])

    return (
        <Drawer
            className="container_drawer_my_game black"
            title="My games"
            placement="right"
            size={'large'}
            zIndex='99'
            onClose={onClose}
            open={openSwitch}
        >
            <Tabs
                defaultActiveKey={['1']}
                activeKey={tabsActive}
                items={[
                    {
                        key: '1',
                        label: 'Favorites',
                        children: <FavoritesPage favoritesData={favoritesData} onClose={onClose}/>
                    },
                    // {
                    //     key: '2',
                    //     label: 'Recent',
                    //     children: <RecentPage/>
                    // },
                    {
                        key: '3',
                        label: 'Liked',
                        children: <LikedPage likeData={likeData} onClose={onClose}/>
                    },
                ]}
                onTabClick={onTabClick}
                onChange={onChange}
            />
        </Drawer>
    )
}

export default DrawerContainer;