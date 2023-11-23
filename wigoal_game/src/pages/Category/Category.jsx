import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router'

import {Col, Row} from "antd";

import {getCatedata} from "../../api";

import GameThumbBox from "../../Layout/components/Content/GameThumbBox/GameThumbBox";

const CategoryContainer = (props) => {
    // const {} = props;

    const [pageData, setPageData] = useState([])
    const [sss, setSss] = useState([])

    const { search } = useLocation()

    const categoryPageData = () => {
        getCatedata(search).then(res => {
            setPageData(res.data.list)
            setSss(res.data.list)
        })
    }

    useEffect(() => {
        categoryPageData();
    }, []);

    return(
        <div>
            <div>
                <div className="MuiBox-root">
                    <div className="css-1lav3oo">
                        <a href="https://www.crazygames.com/c/driving">Driving</a>
                    </div>
                    <h1>Car Games</h1>
                    <div>
                        <div className="css-3r4t8s">
                            <p>Race cars at top speed around city streets, do stunts, or just
                            drive! Browse the complete collection of free car games and see where you’ll be driving
                            next. You can find the best and newest car games by using the filters.</p>
                        </div>
                        <div className="css-13bjm5z">Show More</div>
                    </div>
                </div>
            </div>
            <div>
                {
                    pageData.map(item => {
                        <GameThumbBox item={item}></GameThumbBox>
                    })
                }
                {/*<Row gutter={[10, 15]}>*/}
                {/*    {*/}
                {/*        pageData.map(item => {*/}
                {/*            <Col xs={12} sm={8} md={6} lg={4}>*/}
                {/*                <GameThumbBox item={item}></GameThumbBox>*/}
                {/*            </Col>*/}
                {/*        })*/}
                {/*    }*/}
                {/*</Row>*/}
            </div>
        </div>
    )
};

export default CategoryContainer;