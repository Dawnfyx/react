import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import SearchContainer from "../../Layout/components/Search/Search";


const Search = () => {
    const { search } = useLocation()

    return(
        <div>
            <SearchContainer></SearchContainer>
            i is home Search
        </div>
    )
};

export default Search;