import React, { useState } from 'react';
import logo from "../../../assets/img/logo.png";

const LogoContainer = (props) => {
    const { collapsed } = props;
    return(
        <div className="logo-box">
            <img src={logo} alt="logo" className="logo-img" width="50" height="50" />
            {!collapsed ? <h2 className="logo-text">Hooks Admin</h2> : null}
        </div>
    )
};

export default LogoContainer;