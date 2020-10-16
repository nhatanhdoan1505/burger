import React from 'react';
import './Logo.css';
import Logo from '.././../assets/images/burger-logo.png';

const logo = (props) => (
    <div className="Logo" style={{with: props.height}}>
        <img src={Logo} alt="My Burger"/>
    </div>
)

export default logo;