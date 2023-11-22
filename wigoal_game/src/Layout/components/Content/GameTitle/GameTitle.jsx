import React, { useState } from 'react';

const TitleContainer = (props) => {

    return(
        <div className="titleContainer">
            <h2 className="carouselTitle">
                <span>CrazyGames Originals</span>
            </h2>
            <a className="carouselTitleLink" href="https://www.crazygames.com/originals">View more</a>
        </div>
    )
};

export default TitleContainer;