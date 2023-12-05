import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router'

import {Col, Row, Spin} from "antd";

import {getCatedata} from "../../api";
import {utilsTitleCase} from "../../utils/mixin";

import GameThumbBox from "../../Layout/components/Content/GameThumbBox/GameThumbBox";

import './Category.less'

const CategoryPage = (props) => {
    // const {} = props;
    const [spinning, setSpinning] = useState(true);
    const [pageData, setPageData] = useState([])

    const { search } = useLocation()

    let cataname = search.slice(6)

    const categoryPageData = (data) => {
        getCatedata(data).then(res => {
            setPageData(res.data.list);
            setSpinning(false);
        })
    }

    useEffect(() => {
        categoryPageData(search);
    }, [search]);

    return(
        <div className="category_page">
            <Spin spinning={spinning} fullscreen />
            <div>
                <div className="category_title">
                    <h1>{utilsTitleCase(cataname)} Games</h1>
                    <div>
                        {/*<div className="css-3r4t8s">*/}
                        {/*    <p>Race cars at top speed around city streets, do stunts, or just*/}
                        {/*    drive! Browse the complete collection of free car games and see where you’ll be driving*/}
                        {/*    next. You can find the best and newest car games by using the filters.</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <Row gutter={[10, 15]}>
                {
                    pageData.map((item, index) => (
                        <Col key={index} xs={8} sm={8} md={6} lg={4} xl={3} xxl={3}>
                            <GameThumbBox link={"/page/details?gid=" + item.gid} url={'http://test.ads-goal.com' + item.icon} name={item.name}></GameThumbBox>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
};

export default CategoryPage;