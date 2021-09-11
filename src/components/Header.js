import React from "react";
import './Header.scss';
import Logo from '../image/logo.png';

export default class Header extends React.Component {

    render() {
        return(
            <div id="Header">
                <div className="header-left">
                    <img src={ Logo } alt="logo"></img>
                </div>
                <div className="header-buttons">
                    <a href="#About">About me</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Contact">Contact me</a>
                </div>
            </div>
        );
    }
}