import React, { useState } from 'react';
import logo from "../../../assets/img/logo.png";
import {Link} from "react-router-dom";

const LogoContainer = (props) => {
    const { collapsed } = props;
    return(
        <div className="container_logo">
            <Link to=''>
                <div className="logo-box">
                    <img src={logo} alt="logo" className="logo-img" width="50" height="50" />
                    {/*{!collapsed ? <h2 className="logo-text">Wigoal Game</h2> : null}*/}
                </div>
                <div className="logo-text">
                    Wigoal&nbsp;Game
                </div>
            </Link>
        </div>
    )
};

export default LogoContainer;