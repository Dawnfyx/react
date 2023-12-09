import React, {useState, useEffect, useContext} from 'react';
import {useLocation, useNavigate} from 'react-router';
import {Link} from "react-router-dom";

import StoreContext from "../../store/StoreContext"

import {
    LikeOutlined,
    DislikeOutlined,
    HeartOutlined,
    ExclamationCircleOutlined,
    ShareAltOutlined,
    TwitterOutlined,
    YoutubeOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    PlayCircleOutlined,
    CloudUploadOutlined,
} from '@ant-design/icons';
import {Row, Col, Image, Button, Space, Tag, Spin, Modal} from "antd";

import {getDetailsdata} from "../../api";

import GameThumbBox from "../../Layout/components/Content/GameThumbBox/GameThumbBox";

import './Details.less';

import {starsScore} from "../../utils/mixin";

import ShareContainer from "../../Layout/components/Share/Share";

const DetailsPage = () => {
    const [spinning, setSpinning] = useState(true);
    const [pageData, setPageData] = useState({});
    const [previewData, setPreviewData] = useState([]);
    const [recommendData, setRecommendData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const [isDisLike, setIsDisLike] = useState(false);
    const [isFavorites, setIsFavorites] = useState(false);
    const [operateData, setOperateData] = useState([]);
    const {search} = useLocation()

    const ctx = useContext(StoreContext);

    const detailsPageData = (data) => {
        getDetailsdata(data).then(res => {
            setPageData(res.data);
            setPreviewData(res.data.preview);
            setRecommendData(res.data.recommend);
            setSpinning(false);
            setLikeNum(res.data);
            getMyGames(res.data)
        })
    }

    const ratingScore = (score) => {
        return '';
    }

    const releaseDate = (date) => {
        if (date) {
            date = '' + date.split(' ')[0];
            return date;
        }
    }

    const randomNum = (val = 10, ranVal = 1) => {
        let temp = val - Math.floor(Math.random(ranVal) * 5);
        return temp;
    }

    const setLocalLikeItem = (gid) => {
        let temp = [];
        temp.push({
            gid: gid,
            likeNum: [randomNum(25, 7), randomNum(5, 2)]
        })
        window.localStorage.setItem('LikeNum', JSON.stringify(temp))
    }

    const setLikeNum = () => {
        if (
            typeof window.localStorage.getItem('LikeNum') == 'object' ||
            !window.localStorage.getItem('LikeNum') ||
            !JSON.parse(window.localStorage.getItem('LikeNum')) ||
            window.localStorage.getItem('LikeNum') == '{}'
        ) {
            setLocalLikeItem(search.split('?gid=')[1])
        }

        let ArrMap = JSON.parse(window.localStorage.getItem('LikeNum'));
        let cuerrtVal = ArrMap.find(item => item.gid === search.split('?gid=')[1]);
        if (!cuerrtVal) {
            ArrMap.push({
                gid: search.split('?gid=')[1],
                likeNum: [randomNum(25, 7), randomNum(5, 2)]
            })
            window.localStorage.setItem('LikeNum', JSON.stringify(ArrMap))
        }
    }

    const getLikeNum = () => {
        if (
            typeof window.localStorage.getItem('LikeNum') == 'object' ||
            !window.localStorage.getItem('LikeNum') ||
            !JSON.parse(window.localStorage.getItem('LikeNum')) ||
            window.localStorage.getItem('LikeNum') == '{}'
        ) {
            setLikeNum()
        }

        let ArrMap = JSON.parse(window.localStorage.getItem('LikeNum'));
        let cuerrtVal = ArrMap.find(item => item.gid === search.split('?gid=')[1]);
        if (!cuerrtVal) {
            setLikeNum()
            ArrMap = JSON.parse(window.localStorage.getItem('LikeNum'));
            cuerrtVal = ArrMap.find(item => item.gid === search.split('?gid=')[1]);
        }
        return cuerrtVal.likeNum;
    }

    const setMyGamesItem = (gid, like = false, dislike = false, favorites = false) => {
        let temp = []
        temp.push({
            gid: gid,
            like: like,
            dislike: dislike,
            favorites: favorites,
            details: pageData
        })
        window.localStorage.setItem('MyGames', JSON.stringify(temp))
    }

    const setMyGames = (gid, like = false, dislike = false, favorites = false) => {
        if (
            typeof window.localStorage.getItem('MyGames') == 'object' ||
            !window.localStorage.getItem('MyGames') ||
            !JSON.parse(window.localStorage.getItem('MyGames')) ||
            window.localStorage.getItem('MyGames') == '{}'
        ) {
            setMyGamesItem(search.split('?gid=')[1], like, dislike, favorites)
        }

        let ArrMap = JSON.parse(window.localStorage.getItem('MyGames'));
        let cuerrtVal = ArrMap.find(item => item.gid === search.split('?gid=')[1]);
        if (!cuerrtVal) {
            ArrMap.push({
                gid: search.split('?gid=')[1],
                like: like,
                dislike: dislike,
                favorites: favorites,
                details: {
                    icon: pageData.icon,
                    link: pageData.link
                }
            })
            window.localStorage.setItem('MyGames', JSON.stringify(ArrMap))
        } else {
            cuerrtVal.like = like;
            cuerrtVal.dislike = dislike;
            cuerrtVal.favorites = favorites;
            cuerrtVal.details = {
                icon: pageData.icon,
                link: pageData.link
            };
            window.localStorage.setItem('MyGames', JSON.stringify(ArrMap))

            setIsLike(like);
            setIsDisLike(dislike);
            setIsFavorites(favorites);
        }
    }

    const getMyGames = () => {
        if (
            typeof window.localStorage.getItem('MyGames') == 'object' ||
            !window.localStorage.getItem('MyGames') ||
            !JSON.parse(window.localStorage.getItem('MyGames')) ||
            window.localStorage.getItem('MyGames') == '{}'
        ) {
            return;
        }

        let ArrMap = JSON.parse(window.localStorage.getItem('MyGames'));
        let cuerrtVal = ArrMap.find(item => item.gid === search.split('?gid=')[1]);
        if (!cuerrtVal) {
            setIsLike(false);
            setIsDisLike(false);
            setIsFavorites(false);
            return;
        }
        setIsLike(cuerrtVal.like);
        setIsDisLike(cuerrtVal.dislike);
        setIsFavorites(cuerrtVal.favorites);
    }

    const splitVotes = () => {
        if (typeof pageData.count !== 'number') return;

        // 可以用正则实现 但是我写不好 pass
        // let sss = /^[a-zA-Z0-9]{4,6})?\d{3}$/;
        // console.log("ssss", sss);

        //几个等于是 空间转变的需要 字符串变成数组 数组变成 字符串
        let temp = "" + pageData.count;
        temp = temp.split('').reverse()
        temp.splice(3, 0, ',')
        temp.reverse()
        temp = temp.join('')
        return temp;
    }

    const handleLike = (event, type, gid) => {
        event.stopPropagation()

        if (type == 'Like') {
            setIsLike(!isLike);
            setMyGames(search.split('?gid=')[1], !isLike, isDisLike, isFavorites)
        } else if (type == 'DisLike') {
            setIsDisLike(!isDisLike);
            setMyGames(search.split('?gid=')[1], isLike, !isDisLike, isFavorites)
        }
    }

    const handleFavorites = (event, gid) => {
        setIsFavorites(!isFavorites);
        setMyGames(search.split('?gid=')[1], isLike, isDisLike, !isFavorites)

        // let title = 'sss'
        // let url = 'sss'
        // if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox
        //     window.sidebar.addPanel(title, url, "");
        // } else if (window.external && ('AddFavorite' in window.external)) { // Internet Explorer
        //     window.external.AddFavorite(url, title);
        // } else if (window.opera && window.print) { // Opera
        //     var elem = document.createElement('a');
        //     elem.setAttribute('href', url);
        //     elem.setAttribute('title', title);
        //     elem.setAttribute('rel', 'sidebar');
        //     elem.click();
        // } else { // Other browsers
        //     alert("请按 Ctrl+D 加入收藏夹");
        // }
    }

    const handleShowModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        detailsPageData(search)

        // //有BUG
        // if(isLike == true){
        //     // setIsLike(true);
        //     setIsDisLike(false);
        //     setMyGames(search.split('?gid=')[1], true, false, isFavorites)
        // }
        //
        // if(isDisLike == true) {
        //     setIsLike(false);
        //     // setIsDisLike(true);
        //     setMyGames(search.split('?gid=')[1], false, true, isFavorites)
        // }

    }, [search])

    return (
        <>
            <div className="details_page">
                <Spin spinning={spinning} fullscreen/>

                <div className="game_container">
                    <div className="game_container_title">
                        <h1>{pageData.name}</h1>
                    </div>
                    <div className="game_container_play">
                        {/*<Link to={pageData.link}>*/}
                        <a href={pageData.link}>
                            <Button>&nbsp; &nbsp;PLAY NOW&nbsp; &nbsp;</Button>
                        </a>
                        {/*</Link>*/}
                    </div>
                    <div className="game_container_bg_mask"></div>
                    <img src={process.env.REACT_APP_BASEURL + pageData.icon} className='game_container_bg' alt=""/>
                    {/*<div className="game_container_menu">*/}
                    {/*    <CloudUploadOutlined /> &nbsp;&nbsp;&nbsp;*/}
                    {/*    <div>Don&apos;t lose your progress! <span className="btn">Login now</span></div>*/}
                    {/*</div>*/}
                </div>

                <div className="game_info_container">
                    <div className="game_info_box">
                        <div className="info_box_title">
                            <h1>Mini Golf Club</h1>
                        </div>
                        <div className="info_box_operate">
                            <Button className={isLike ? 'like' : ''} type="link" icon={<LikeOutlined/>}
                                    onClick={(e) => handleLike(e, 'Like', pageData.icon.split('/')[2])}>{getLikeNum()[0]}K</Button>
                            <Button className={isDisLike ? 'dislike' : ''} type="link" icon={<DislikeOutlined/>}
                                    onClick={(e) => handleLike(e, 'DisLike', pageData.icon.split('/')[2])}>{getLikeNum()[1]}K</Button>

                            <Button type="link" icon={isFavorites
                                ? <svg className="favorites_svg" viewBox="0 0 120 120" focusable="false"
                                       aria-hidden="true" width="120" height="120" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M40.2223 15C33.318 15 27.6735 16.4827 23.1717 19.1231C18.6594 21.7698 15.571 25.4186 13.5457 29.3108C9.59151 36.9098 9.62884 45.499 10.593 50.4327C13.1027 63.2751 22.0972 76.7358 31.5186 86.7905C36.2887 91.8812 41.354 96.3 46.0789 99.4881C50.5575 102.51 55.5562 105 60.0001 105C64.444 105 69.4427 102.51 73.9213 99.4881C78.6462 96.3 83.7115 91.8812 88.4816 86.7905C97.903 76.7358 106.897 63.2751 109.407 50.4327C110.371 45.499 110.409 36.9098 106.455 29.3108C104.429 25.4186 101.341 21.7698 96.8285 19.1231C92.3267 16.4827 86.6822 15 79.7779 15C74.2905 15 69.5521 17.478 65.892 20.5653C63.6296 22.4736 61.6515 24.7163 60.0001 27.0366C58.3487 24.7163 56.3706 22.4736 54.1082 20.5653C50.4481 17.478 45.7097 15 40.2223 15Z"
                                          fill="url(#paint0_linear_1861_3922)"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear_1861_3922" x1="60.0001" y1="15"
                                                        x2="60.0001"
                                                        y2="105" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#B634C1"></stop>
                                            <stop offset="1" stopColor="#FF8BA7"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                : <HeartOutlined className="favorites_svg"/>
                            }
                                    onClick={(e) => handleFavorites(e, pageData.icon.split('/')[2])}></Button>
                            {/*<hr className="vertical_line" />*/}
                            {/*<Button type="link" icon={<ExclamationCircleOutlined />} ></Button>*/}
                            <hr className="vertical_line"/>
                            <Button type="link" icon={<ShareAltOutlined/>} onClick={handleShowModal}></Button>
                        </div>
                        <div className="info_box_material">
                            <div className="material_item">
                                <div className="item_left">Rating</div>
                                <div className="item_right">
                                    <div><span>{pageData.score}</span>&nbsp;</div>
                                    <div>&nbsp;({splitVotes()}&nbsp;votes)</div>
                                </div>
                            </div>
                            {/*<div className="material_item">*/}
                            {/*    <div className="item_left">Developer</div>*/}
                            {/*    <div className="item_right">*/}
                            {/*        <div><span className="item_focus">Obumo Games</span></div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="material_item">
                                <div className="item_left">Released</div>
                                <div className="item_right">
                                    <div>
                                        {
                                            releaseDate(pageData.jointime)
                                        }
                                    </div>
                                </div>
                            </div>
                            {/*<div className="material_item">*/}
                            {/*    <div className="item_left">Last Updated</div>*/}
                            {/*    <div className="item_right">*/}
                            {/*        <div>November 2023</div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="material_item">
                                <div className="item_left">Technology</div>
                                <div className="item_right">
                                    <div>HTML5 (Unity WebGL)</div>
                                </div>
                            </div>
                            <div className="material_item">
                                <div className="item_left">Platform</div>
                                <div className="item_right">
                                    <div>Browser (desktop, mobile, tablet)</div>
                                </div>
                            </div>
                            <div className="material_item">
                                <div className="item_left">Classification</div>
                                <div className="item_right">
                                    <div className="breadcrump_box">
                                        <div className="breadcrump_separator">
                                            <Link to="/">
                                                Games
                                            </Link>
                                            <div className="breadcrumpSeparator">»</div>
                                        </div>
                                        <div className="breadcrump_separator">
                                            <Link to={"/page/category?type=" + pageData.type}>
                                                {pageData.type}
                                            </Link>
                                            <div className="breadcrumpSeparator">»</div>
                                        </div>
                                        <div className="breadcrump_separator">
                                            <span>{pageData.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="horizontal_line"/>
                        <div className="info_box_description">

                            {/*<div className="description_item">*/}
                            {/*    <h3>Unique Gamemodes</h3>*/}
                            {/*    <ul>*/}
                            {/*        <li>*/}
                            {/*            Tournament: Play a large collection of pre-made and user-made courses with 9 holes each. The fewer strikes you have at the end of the course the better.*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            Practice: Practice each level individually to improve your shooting and aiming skills. Completing the levels are easy but mastering them takes time.*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            Versus: Play turn-based matches for up to 4 players locally on the same device. Challenge your friends and family.*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            Splitscreen: Play on the same device with up to 4 players by dividing the available screen space.*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            Online multiplayer: Play against your friends in real-time globally.*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                            {/*<div className="description_item">*/}
                            {/*    <h3>Growing collection of courses</h3>*/}
                            {/*    <ul>*/}
                            {/*        <li>*/}
                            {/*            The game features hundreds interactive holes with dynamic parts and moving obstacles.*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            Levels contain a huge variety of ramps, turns, tunnels, slopes, jumps, sand traps, special boosters and portals.*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            Boosters like wind zones or jump areas physically accurately interact with your ball.*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                            {/*<div className="description_item">*/}
                            {/*    <h3>Features</h3>*/}
                            {/*    <ul>*/}
                            {/*        <li>*/}
                            {/*            Mini Golf Club has high replayability thanks to the advanced physics engine.*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            You can play the same level multiple times and you get a different gameplay experience each time.*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            The game supports touch, keyboard, mouse and controller inputs.*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}

                            <div className="description_item">
                                <h3>Release Date</h3>
                                <p>
                                    {
                                        releaseDate(pageData.jointime)
                                    }
                                </p>
                            </div>
                            {/*<div className="description_item">*/}
                            {/*    <h3>Developer</h3>*/}
                            {/*    <p>Mini Golf Club is developed by Obumo Games.</p>*/}
                            {/*</div>*/}
                            <div className="description_item">
                                <h3>Platform</h3>
                                <ul>
                                    <li>
                                        Web browser (desktop and mobile)
                                    </li>
                                    {/*<li>Windows (<a target="_blank" rel="nofollow" href="">link</a>)</li>*/}
                                    <li>Windows</li>
                                </ul>
                            </div>
                            {/*<div className="description_item">*/}
                            {/*    <h3>Last Updated</h3>*/}
                            {/*    <p>Nov 20, 2023</p>*/}
                            {/*</div>*/}
                            {/*<div className="description_item">*/}
                            {/*    <h3>Controls</h3>*/}
                            {/*    <ul>*/}
                            {/*        <li>Drag the left mouse button = shoot ball</li>*/}
                            {/*        <li>C = camera mode</li>*/}
                            {/*        <li>Arrow keys / Mouse = look around</li>*/}
                            {/*        <li>Page up / mouse wheel up = zoom in</li>*/}
                            {/*        <li>Page down / mouse wheel down = zoom out</li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}

                            <div className="description_item">
                                <h3>Description</h3>
                                <p>
                                    {
                                        pageData.description
                                    }
                                </p>
                            </div>
                        </div>
                        {/*<div className="info_box_tags">*/}
                        {/*    <Space size={[0, 8]} wrap>*/}
                        {/*        <Tag icon={<TwitterOutlined />} color="#55acee">*/}
                        {/*            Twitter*/}
                        {/*        </Tag>*/}
                        {/*        <Tag icon={<YoutubeOutlined />} color="#cd201f">*/}
                        {/*            Youtube*/}
                        {/*        </Tag>*/}
                        {/*        <Tag icon={<FacebookOutlined />} color="#3b5999">*/}
                        {/*            Facebook*/}
                        {/*        </Tag>*/}
                        {/*        <Tag icon={<LinkedinOutlined />} color="#55acee">*/}
                        {/*            LinkedIn*/}
                        {/*        </Tag>*/}
                        {/*    </Space>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="game_info_recommend">
                    <Row gutter={[10, 12]} style={{
                        justifyContent: 'center',
                    }}>
                        {
                            recommendData.map((item, index) => (
                                <Col key={index} xs={8} sm={8} md={6} lg={4} xl={3} xxl={2}>
                                    <GameThumbBox
                                        key={item.gid}
                                        link={"/page/details?gid=" + item.gid}
                                        url={process.env.REACT_APP_BASEURL + item.icon}
                                        name={item.name}
                                    ></GameThumbBox>
                                </Col>
                            ))
                        }
                    </Row>
                </div>

            </div>
            <ShareContainer isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></ShareContainer>
        </>
    )
};

export default DetailsPage;