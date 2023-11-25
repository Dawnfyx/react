import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router'

import {Col, Row} from "antd";

import {getCatedata} from "../../api";

import GameThumbBox from "../../Layout/components/Content/GameThumbBox/GameThumbBox";

const Category = (props) => {
    // const {} = props;

    const [pageData, setPageData] = useState([])

    const { search } = useLocation()

    let cataname = search.slice(6)

    const categoryPageData = (data) => {
        getCatedata(data).then(res => {
            setPageData(res.data.list)
        })
    }

    //todo
    // 需要做个判断 同的category 需要重新加载

    useEffect(() => {
        categoryPageData(search);
    }, [search]);

    return(
        <div className="category_page">
            <div>
                <div className="MuiBox-root">
                    <h1>{cataname} Games</h1>
                    <div>
                        <div className="css-3r4t8s">
                            <p>Race cars at top speed around city streets, do stunts, or just
                            drive! Browse the complete collection of free car games and see where you’ll be driving
                            next. You can find the best and newest car games by using the filters.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Row gutter={[10, 15]}>
                {
                    pageData.map((item, index) => (
                        <Col key={index} xs={12} sm={8} md={6} lg={4} xl={3} xxl={3}>
                            <GameThumbBox link={"/page/details?gid=" + item.gid} url={item.icon} name={item.name}></GameThumbBox>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
};

export default Category;