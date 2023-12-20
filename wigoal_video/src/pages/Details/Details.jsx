import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {
    LikeOutlined,
    DislikeOutlined,
    PlusOutlined,
    ShareAltOutlined,
    CaretUpOutlined,
    CaretDownOutlined,
} from '@ant-design/icons';
import {Spin} from 'antd';

import ShareContainer from "../../Layout/components/Share/Share";

import "./Details.less"

const Details = (props) => {

    const [spinning, setSpinning] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [episode, setEpisode] = useState(false);
    const [pageData, setPageData] = useState();
    const [coverImage, setCoverImage] = useState();

    const handleShowModal = () => {
        setIsModalOpen(true);
    };
    const switchEpisode = () => {
        setEpisode(!episode)
    };
    const getNum = (str) => {
        let newstr = String(str)
        return newstr.substring(0, 1) + "." + newstr.substring(1, 3) + "W+"
    }

    function fetchData() {
        return new Promise((resolve, reject) => {
            // 模拟异步操作
            setTimeout(() => {
                const data = {
                    "code": 200,
                    "msg": null,
                    "data": {
                        "id": 676,
                        "title": "Lu Shao's Reborn Wife",
                        "coverUrl": "https://img.elec.top/upload/76bd8432-8a12-48df-9eca-051c13053736.jpg",
                        "dramaCoverUrl": "",
                        "saleType": 4,
                        "play": "other",
                        "state": "finish",
                        "cv": "The president watched the woman he liked die in his arms with his own eyes. He decided to die with his lover in his arms, but he didn't know that the woman's soul was watching him silently. She wanted to stop him but could do nothing. She hated that she had met someone unkind in her previous life. She repented in public at the engagement banquet with Lu Boyan and wrongly paid her happiness to this scumbag, it was not until love rat gave her a dead hand that she woke up suddenly. It was Lu Bo Yan who had always loved her. Before she died, she confided her heart to the man. If there was an afterlife, she would be with him. She would treat him well. Fortunately, God opened her eyes and let her be reborn to the day when she broke up with Lu Bo Yan. This time she would not leave him again....",
                        "authVip": 0,
                        "author": "",
                        "intro": "The president watched the woman he liked die in his arms with his own eyes. He decided to die with his lover in his arms, but he didn't know that the woman's soul was watching him silently. She wanted to stop him but could do nothing. She hated that she had met someone unkind in her previous life. She repented in public at the engagement banquet with Lu Boyan and wrongly paid her happiness to this scumbag, it was not until love rat gave her a dead hand that she woke up suddenly. It was Lu Bo Yan who had always loved her. Before she died, she confided her heart to the man. If there was an afterlife, she would be with him. She would treat him well. Fortunately, God opened her eyes and let her be reborn to the day when she broke up with Lu Bo Yan. This time she would not leave him again....",
                        "isCollect": 0,
                        "isPurchase": 0,
                        "readTotal": 19488,
                        "collectTotal": 0,
                        "commentTotal": 0,
                        "isShelf": 1,
                        "packageDiscount": 100,
                        "packageType": 0,
                        "packagePrice": 0,
                        "tagList": [
                            {
                                "id": 10,
                                "tag": "爱情"
                            },
                            {
                                "id": 21,
                                "tag": "言情"
                            },
                            {
                                "id": 22,
                                "tag": "现代"
                            },
                            {
                                "id": 6,
                                "tag": "重生"
                            }
                        ],
                        "dramaList": [
                            {
                                "id": 57110,
                                "worksId": 676,
                                "number": 1,
                                "title": "001",
                                "coverUrl": "",
                                "intro": null,
                                "saleType": 1,
                                "isFreeTime": 0,
                                "freeTime": 0,
                                "price": 0,
                                "purchase": false,
                                "commentTotal": 0,
                                "duration": 225,
                                "playCount": 1,
                                "playUrl": null,
                                "worksTitle": null,
                                "worksIntro": null,
                                "collectTotal": 0,
                                "isCollect": 0,
                                "worksCoverUrl": null,
                                "captionsUrl": null,
                                "isSubtitles": 1,
                                "isLandscape": null,
                                "state": "serialize",
                                "isPlay": 0,
                                "isNewPlay": 0
                            },
                            {
                                "id": 57111,
                                "worksId": 676,
                                "number": 2,
                                "title": "002",
                                "coverUrl": "",
                                "intro": null,
                                "saleType": 1,
                                "isFreeTime": 0,
                                "freeTime": 0,
                                "price": 0,
                                "purchase": false,
                                "commentTotal": 0,
                                "duration": 95,
                                "playCount": 0,
                                "playUrl": null,
                                "worksTitle": null,
                                "worksIntro": null,
                                "collectTotal": 0,
                                "isCollect": 0,
                                "worksCoverUrl": null,
                                "captionsUrl": null,
                                "isSubtitles": 1,
                                "isLandscape": null,
                                "state": "serialize",
                                "isPlay": 0,
                                "isNewPlay": 0
                            },
                            {
                                "id": 57112,
                                "worksId": 676,
                                "number": 3,
                                "title": "003",
                                "coverUrl": "",
                                "intro": null,
                                "saleType": 1,
                                "isFreeTime": 0,
                                "freeTime": 0,
                                "price": 0,
                                "purchase": false,
                                "commentTotal": 0,
                                "duration": 97,
                                "playCount": 0,
                                "playUrl": null,
                                "worksTitle": null,
                                "worksIntro": null,
                                "collectTotal": 0,
                                "isCollect": 0,
                                "worksCoverUrl": null,
                                "captionsUrl": null,
                                "isSubtitles": 1,
                                "isLandscape": null,
                                "state": "serialize",
                                "isPlay": 0,
                                "isNewPlay": 0
                            },
                            {
                                "id": 57113,
                                "worksId": 676,
                                "number": 4,
                                "title": "004",
                                "coverUrl": "",
                                "intro": null,
                                "saleType": 1,
                                "isFreeTime": 0,
                                "freeTime": 0,
                                "price": 0,
                                "purchase": false,
                                "commentTotal": 0,
                                "duration": 82,
                                "playCount": 0,
                                "playUrl": null,
                                "worksTitle": null,
                                "worksIntro": null,
                                "collectTotal": 0,
                                "isCollect": 0,
                                "worksCoverUrl": null,
                                "captionsUrl": null,
                                "isSubtitles": 1,
                                "isLandscape": null,
                                "state": "serialize",
                                "isPlay": 0,
                                "isNewPlay": 0
                            },
                            {
                                "id": 57114,
                                "worksId": 676,
                                "number": 5,
                                "title": "005",
                                "coverUrl": "",
                                "intro": null,
                                "saleType": 1,
                                "isFreeTime": 0,
                                "freeTime": 0,
                                "price": 0,
                                "purchase": false,
                                "commentTotal": 0,
                                "duration": 99,
                                "playCount": 0,
                                "playUrl": null,
                                "worksTitle": null,
                                "worksIntro": null,
                                "collectTotal": 0,
                                "isCollect": 0,
                                "worksCoverUrl": null,
                                "captionsUrl": null,
                                "isSubtitles": 1,
                                "isLandscape": null,
                                "state": "serialize",
                                "isPlay": 0,
                                "isNewPlay": 0
                            },
                            {
                                "id": 57115,
                                "worksId": 676,
                                "number": 6,
                                "title": "006",
                                "coverUrl": "",
                                "intro": null,
                                "saleType": 4,
                                "isFreeTime": 0,
                                "freeTime": 0,
                                "price": 25,
                                "purchase": false,
                                "commentTotal": 0,
                                "duration": 71,
                                "playCount": 0,
                                "playUrl": null,
                                "worksTitle": null,
                                "worksIntro": null,
                                "collectTotal": 0,
                                "isCollect": 0,
                                "worksCoverUrl": null,
                                "captionsUrl": null,
                                "isSubtitles": 1,
                                "isLandscape": null,
                                "state": "serialize",
                                "isPlay": 0,
                                "isNewPlay": 0
                            },
                            {
                                "id": 57116,
                                "worksId": 676,
                                "number": 7,
                                "title": "007",
                                "coverUrl": "",
                                "intro": null,
                                "saleType": 4,
                                "isFreeTime": 0,
                                "freeTime": 0,
                                "price": 25,
                                "purchase": false,
                                "commentTotal": 0,
                                "duration": 95,
                                "playCount": 0,
                                "playUrl": null,
                                "worksTitle": null,
                                "worksIntro": null,
                                "collectTotal": 0,
                                "isCollect": 0,
                                "worksCoverUrl": null,
                                "captionsUrl": null,
                                "isSubtitles": 1,
                                "isLandscape": null,
                                "state": "serialize",
                                "isPlay": 0,
                                "isNewPlay": 0
                            },
                            {
                                "id": 57117,
                                "worksId": 676,
                                "number": 8,
                                "title": "008",
                                "coverUrl": "",
                                "intro": null,
                                "saleType": 4,
                                "isFreeTime": 0,
                                "freeTime": 0,
                                "price": 25,
                                "purchase": false,
                                "commentTotal": 0,
                                "duration": 73,
                                "playCount": 0,
                                "playUrl": null,
                                "worksTitle": null,
                                "worksIntro": null,
                                "collectTotal": 0,
                                "isCollect": 0,
                                "worksCoverUrl": null,
                                "captionsUrl": null,
                                "isSubtitles": 1,
                                "isLandscape": null,
                                "state": "serialize",
                                "isPlay": 0,
                                "isNewPlay": 0
                            },
                            {
                                "id": 57118,
                                "worksId": 676,
                                "number": 9,
                                "title": "009",
                                "coverUrl": "",
                                "intro": null,
                                "saleType": 4,
                                "isFreeTime": 0,
                                "freeTime": 0,
                                "price": 25,
                                "purchase": false,
                                "commentTotal": 0,
                                "duration": 103,
                                "playCount": 0,
                                "playUrl": null,
                                "worksTitle": null,
                                "worksIntro": null,
                                "collectTotal": 0,
                                "isCollect": 0,
                                "worksCoverUrl": null,
                                "captionsUrl": null,
                                "isSubtitles": 1,
                                "isLandscape": null,
                                "state": "serialize",
                                "isPlay": 0,
                                "isNewPlay": 0
                            },
                            {
                                "id": 57119,
                                "worksId": 676,
                                "number": 10,
                                "title": "010",
                                "coverUrl": "",
                                "intro": null,
                                "saleType": 4,
                                "isFreeTime": 0,
                                "freeTime": 0,
                                "price": 25,
                                "purchase": false,
                                "commentTotal": 0,
                                "duration": 85,
                                "playCount": 0,
                                "playUrl": null,
                                "worksTitle": null,
                                "worksIntro": null,
                                "collectTotal": 0,
                                "isCollect": 0,
                                "worksCoverUrl": null,
                                "captionsUrl": null,
                                "isSubtitles": 1,
                                "isLandscape": null,
                                "state": "serialize",
                                "isPlay": 0,
                                "isNewPlay": 0
                            },
                        ],
                        "isLandscape": 0
                    },
                    "extend": null
                }
                // 模拟成功情况
                resolve(data.data);
                // 模拟失败情况
                // reject('数据获取失败');
            }, 1000);
        });
    }

    const tempPromise = fetchData();

    useEffect(() => {
        tempPromise.then((data) => {
            console.log('成功：', data);
            setPageData(data);
            setCoverImage(data.coverUrl);
            setSpinning(false);
        })
    }, []);

    return (
        <div className="details_box">
            <Spin spinning={spinning} fullscreen/>
            <div className="details_content">
                <div className="details_info_box">
                    <div className="box_l">
                        <div className="cover_box">
                            <Link to="/video">
                                <div className="image" style={{backgroundImage: 'url(' + coverImage + ')'}}></div>
                            </Link>
                        </div>
                    </div>
                    <div className="box_r">
                        <div className="name">
                            {
                                pageData ? pageData.title ? pageData.title : '' : ''
                            }
                        </div>
                        <div className="episodes">
                            Ended ·
                            {
                                pageData ? pageData.dramaList.length > 0 ? pageData.dramaList.length : '' : ''
                            }
                            episodes
                        </div>
                        <div className="play_num">
                            Views：
                            {
                                pageData ? pageData.readTotal ? getNum(pageData.readTotal) : '' : ''
                            }
                        </div>
                        <div className="flexSB">
                            <Link to="/video">
                                <div className="btn_collect">
                                    {/*<PlusOutlined />*/}

                                    <span>
                                     &nbsp;Play&nbsp;
                                    </span>
                                </div>
                            </Link>
                            <div className="icon_share" onClick={() => handleShowModal()}>
                                <ShareAltOutlined/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="details_introduction_box">
                    {
                        pageData ? pageData.cv ? pageData.cv : '' : ''
                    }
                </div>
            </div>
            <div className="episode_box" style={{bottom: episode ? '-33vh' : '0'}}>
                <div className="episode_top_icon" onClick={() => switchEpisode()}>
                    {
                        episode
                            ? <CaretUpOutlined/>
                            : <CaretDownOutlined/>
                    }
                </div>
                <div className="episode_content">
                    <div className="episodesList_box">
                        {
                            pageData
                                ? pageData.dramaList.map((item, index) => (
                                    <a key={index}
                                       className="episodesList_item"
                                       href={"/video?gid=" + (index + 1)}
                                    >
                                        {index + 1}
                                    </a>
                                ))
                                : ''
                        }
                    </div>
                </div>
            </div>
            <ShareContainer isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></ShareContainer>
        </div>
    );
};

export default Details