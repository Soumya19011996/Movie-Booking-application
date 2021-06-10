import React, { Component } from 'react';
import "./Header.css"
import "../../assets.logo.svg";
import logo from '../../assets/logo.svg';



class Header extends React.Component{
render(){

    return <div>
        <div className="header">
            <div className="logo"><img src={logo} alt='logo'/></div>
        </div>;
    </div>
    
}
}
export default Header;