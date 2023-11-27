import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import {
    LikeOutlined,
    DislikeOutlined,
    HeartOutlined,
    ExclamationCircleOutlined,
    ShareAltOutlined,
} from '@ant-design/icons';
import {Row, Col, Image, Button} from "antd";

import {getDetailsdata} from "../../api";

import GameThumbBox from "../../Layout/components/Content/GameThumbBox/GameThumbBox";

import './Details.less';

import {starsScore} from "../../utils/mixin";

const Details = () => {

    const [pageData, setPageData] = useState({})
    const [previewData, setPreviewData] = useState([])
    const [recommendData, setRecommendData] = useState([])
    const { search } = useLocation()

    const detailsPageData = (data) => {
        getDetailsdata(data).then(res => {
            setPageData(res.data);
            setPreviewData(res.data.preview);
            setRecommendData(res.data.recommend);
        })
    }

    useEffect(() => {
        detailsPageData(search)
    }, [search])

    return(
        <div className="details_page">

            <div className='game_container'>
                {/* img_icon */}
                <img src={'http://test.ads-goal.com' + pageData.icon} alt="" className='game_icon' />

                {/* download data */}
                <div className='load_de'>
                    {/*<p className='score_start'>{starsScore(data.score)} {data.score}</p>*/}
                    <span className='gametype'>HotGame</span>
                    <p className='load_count'>
                        {/*<span>{getNum(data.count)}</span> player*/}
                    </p>
                </div>

                {/* gamebtn */}
                <div className='btn-box'>
                    {/*<a href={data.link} className='dis_a'>*/}
                    <button className='de-btn'>PLAY</button>
                    {/*</a>*/}
                </div>
            </div>
            <div className="game_info_container">
                <div className="game_info_box">
                    <div className="info_box_title">
                        <h1>Mini Golf Club</h1>
                    </div>
                    <div className="info_box_operate">
                        <Button type="link" icon={<LikeOutlined />} >45K</Button>
                        <Button type="link" icon={<DislikeOutlined />} >14K</Button>
                        <Button type="link" icon={<HeartOutlined />} ></Button>
                        <hr className="vertical_line"></hr>
                        <Button type="link" icon={<ExclamationCircleOutlined />} ></Button>
                        <hr className="vertical_line"></hr>
                        <Button type="link" icon={<ShareAltOutlined />} ></Button>

                    </div>
                    <div className="info_box_material">
                        <div className="material_item">
                            <div></div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className="css-12hp3i5">
                            <div className="css-n8optg">Rating<!-- -->:</div>
                            <div className="css-16rvtsf">
                                <div style="font-weight:900">8.2</div>
                                <div style="font-weight:400;font-size:12px;margin-left:4px">(<!-- -->83,297
                                    votes<!-- -->)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info_box_introduce">

                    </div>
                    <div className="info_box_controls">

                    </div>
                    <div className="info_box_tags">

                    </div>
                </div>
            </div>
            <div className="game_info_recommend">
                <Row gutter={[10, 15]}>
                    {
                        recommendData.map((item, index) => (
                            <Col key={index} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                                <GameThumbBox
                                    key={item.gid}
                                    link={"/page/details?gid=" + item.icon}
                                    url={"http://test.ads-goal.com" + item.icon}
                                    name={item.name}
                                ></GameThumbBox>
                            </Col>
                        ))
                    }
                </Row>
            </div>


            {/*<div className="game_info_recommend_preview">*/}
            {/*    <div className='img_view'>*/}
            {/*        {*/}
            {/*            previewData.map((item, index) => (*/}
            {/*                <Image*/}
            {/*                    key={index}*/}
            {/*                    className="list_img"*/}
            {/*                    preview={false}*/}
            {/*                    src={'http://test.ads-goal.com' + item}*/}
            {/*                    alt=""*/}
            {/*                    placeholder={*/}
            {/*                        <Image*/}
            {/*                            preview={false}*/}
            {/*                            fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAIAAAD1h/aCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDMgNzkuMTY0NTI3LCAyMDIwLzEwLzE1LTE3OjQ4OjMyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTExLTIyVDE1OjA1OjUyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTExLTIyVDE1OjA1OjUyKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0xMS0yMlQxNTowNTo1MiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OGU3NWM0ZTAtYWY5Ny0wMDQ3LTg0MWEtOTY5NGQ3ZjlkZTM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhlNzVjNGUwLWFmOTctMDA0Ny04NDFhLTk2OTRkN2Y5ZGUzOCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjhlNzVjNGUwLWFmOTctMDA0Ny04NDFhLTk2OTRkN2Y5ZGUzOCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGU3NWM0ZTAtYWY5Ny0wMDQ3LTg0MWEtOTY5NGQ3ZjlkZTM4IiBzdEV2dDp3aGVuPSIyMDIzLTExLTIyVDE1OjA1OjUyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2XbunwAABFpJREFUeJzt1DENACEAwEDAB2z4t/gaOpFP7hR06tznDoBivQ4A/sc4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gOwDVaYDMAQPF30AAAAASUVORK5CYII="*/}
            {/*                        />*/}
            {/*                    }*/}
            {/*                />*/}
            {/*            ))*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</div>*/}



            {/*{*/}
            {/*    recommendData.map(item => (*/}
            {/*        <div key={item.gid} className='list_item' >*/}
            {/*            <a href={"/page/details?gid=" + item.gid} className='dis_a'>*/}
            {/*                <img src={'http://test.ads-goal.com' + item.icon} alt="" />*/}
            {/*                <div className='item_con'>*/}
            {/*                    <h4>{item.name}</h4>*/}
            {/*                    <p className='gamestart'>{starsScore(item.score)} {item.score}</p>*/}
            {/*                    <p className='playnum'>{item.count / 1000}k+</p>*/}
            {/*                </div>*/}
            {/*                <div className='play'>PLAY GAME</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*}*/}
        </div>
    )
};

export default Details;