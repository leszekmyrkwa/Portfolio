import React from 'react';
import './About.scss';

export default class About extends React.Component {

    render() {
        return(
            <div id="About">
                <h2>About me</h2>
                <p>In <span>2020</span> I needed a change in my life, so I jump into programming as it was my dream as a kid, so every day after work I spend my free time studying programming. In December <span>2020</span> I focus fully on programming and I started applying for jobs, after 2 months I get my first job in <span>Room 58</span>.
In December <span>2021</span> I've got a new job at <span>Exertis UK </span> where I was working mostly using WordPress for big projects.
                </p>
                <h2>Work experience</h2>
                <p><span>December 2021</span> - <span>Work there currently</span> : Junior Front End Developer at Exertis UK</p>
                <p><span>February 2021</span> - <span>October 2021</span> : Junior Front End Developer at Room 58</p>
                <p><span>April 2020</span> - <span>December 2020</span> : Freelance Web Developer / Studying</p>
            </div>
        );
    }
}