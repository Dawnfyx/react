import React from 'react';

import './About.less'

const AboutContainer = (props) =>{

    const { collapsedFlag = false } = props;

    const HandleHostName = () => {
        let pageHost = window.location.host.split('.');
        let len = pageHost.length;
        return pageHost[len - 2] + '.' + pageHost[len - 1];
    }
    const year = new Date().getFullYear();

    return (
        // <div className="about_box">
        //     <a target="_blank" rel="noopener noreferrer" href="">
        //         <span className="link_text">About</span>
        //     </a>
        //     <a target="_blank" rel="noopener noreferrer" href="">
        //         <span className="link_text">Advertising</span>
        //     </a>
        //     <a target="_blank" rel="noopener noreferrer" href="">
        //         <span className="link_text">Kids site</span>
        //     </a>
        //     <a href="">
        //         <span className="link_text">Terms &amp; conditions</span>
        //     </a>
        //     <a target="_blank" rel="noopener noreferrer" href="">
        //         <span className="link_text">Jobs</span>
        //     </a>
        //     <a href="">
        //         <span className="link_text">Privacy</span>
        //     </a>
        //     <a href="">
        //         <span className="link_text">Info for parents</span>
        //     </a>
        //     <a target="_blank" rel="noopener noreferrer" href="">
        //         <span className="link_text">Developers</span>
        //     </a>
        //     <a href="">
        //         <span className="link_text">All games</span>
        //     </a>
        //     <span className="preferences-link">Preferences</span>
        //     <span className="preferences-link">Do not sell my data</span>
        //     <div className="preferences-link">© 2023 H5&nbsp;Games</div>
        // </div>
        <div className='about_box' style={{
            display: collapsedFlag ? 'none' : 'block',
            width: collapsedFlag ? '100%' : '200px',
        }}>
            <span className="preferences-link">©{year} {HandleHostName()} </span>
            <span className="preferences-link">All Rights Reserved</span>
            <a href="/policy.html">Privacy Policy</a> <br/>
            <a href="/useragreement.html">Terms of Service</a>
            <span className="preferences-link">Contact us at : </span>
            <span className="preferences-link">h5service@{HandleHostName()}</span>
        </div>
    )
}

export default AboutContainer;