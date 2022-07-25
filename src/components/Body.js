import React from "react";
import './Body.scss';
import HeroImg from '../image/aleksey-sokolenko-akgUF2mKR7E-unsplash.jpg';
import Skills from "./Skills";
import Contact from "./Contact";
import About from "./About";
import Websites from "./Websites";

export default class Body extends React.Component {

    render() {
        return(
            <div id="Body">
                <div className="hero-section">
                    <div className="background"></div>
                    <div className="body-title">
                        <h1>Hi, I'm Leszek a passionate <br></br><span>Front End Developer</span></h1>
                        <p>I started my programming journey in 2020, I'm motivated and eager to learn new technologies and grow as a developer.
                        </p>
                    </div>
                    <Skills/>
                </div>
                <Websites/>
                <About/>
                <Contact/>
            </div>
        );
    }
}