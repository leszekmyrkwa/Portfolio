import React from "react";
import './Body.scss';
import HeroImg from '../image/aleksey-sokolenko-akgUF2mKR7E-unsplash.jpg';
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

export default class Body extends React.Component {

    render() {
        return(
            <div id="Body">
                <div className="hero-section">
                    <img src={ HeroImg } alt="Hero img"></img>
                    <div className="body-title">
                        <h1>Hi, My name is <span>Leszek</span> and I'm <span>React Developer</span></h1>
                        <p>I've started my journey with programming in first months of 2020, after 9 months of hard work 
                            and using all my free time for learning I land my 1st job as Junior Web Developer in February 2021.
                        </p>
                    </div>
                    <Skills/>
                </div>
                <Projects/>
                <About/>
                <Contact/>
            </div>
        );
    }
}