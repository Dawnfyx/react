import React from 'react';

import './About.less'


const AboutContainer = (props) =>{

    return (
        <div className="about_box">
            <a target="_blank" rel="noopener noreferrer" href="">
                <span className="link_text">About</span>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="">
                <span className="link_text">Advertising</span>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="">
                <span className="link_text">Kids site</span>
            </a>
            <a href="">
                <span className="link_text">Terms &amp; conditions</span>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="">
                <span className="link_text">Jobs</span>
            </a>
            <a href="">
                <span className="link_text">Privacy</span>
            </a>
            <a href="">
                <span className="link_text">Info for parents</span>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="">
                <span className="link_text">Developers</span>
            </a>
            <a href="">
                <span className="link_text">All games</span>
            </a>
            <span className="preferences-link">Preferences</span>
            <span className="preferences-link">Do not sell my data</span>
            <div className="preferences-link">© 2023 H5&nbsp;Games</div>
        </div>
    )
}

export default AboutContainer;