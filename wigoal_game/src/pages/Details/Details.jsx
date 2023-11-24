import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import {getDetailsdata} from "../../api";

import GameThumbBox from "../../Layout/components/Content/GameThumbBox/GameThumbBox";


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
            i is home Details

            {
                previewData.map(item => {
                    <img src={'http://test.ads-goal.com' + item}></img>
                })
            }
        </div>
    )
};

export default Details;