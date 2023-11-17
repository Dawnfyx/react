import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined
} from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch, Col, Row } from 'antd';

const { Meta} = Card;

const HomeContainer = () => {
    const [loading, setLoading] = useState(true);
    const [temp, setTemp] = useState(['', '','', '','', '','', '','', '','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);

    useEffect(() => {

        setTimeout(()=>{
            setLoading(!loading);
        }, 2000)

    }, []);

    return(
        <div>
            <Row gutter={[16, 24]}>
                {
                    temp.map((item, key) => (
                        <Col key={key} xs={12} sm={8} md={6} lg={4}>
                            <Card loading={loading}>
                                <Link to='/details'>
                                    <Meta
                                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Link>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
};

export default HomeContainer;