import React from 'react';
import './About.scss';

export default class About extends React.Component {

    render() {
        return(
            <div id="About">
                <h2>About me</h2>
                <p>In <span>2020</span> I needed a change in my life, so I jump into programming as it was my dream as a kid, so 
                    everyday after work I've spend my free time to study programming. <span>In December 2020</span> I quit my old 
                    job to focus fully on programming and I've started applying for jobs, after 2 months I get my <span>first 
                    job</span> in Room 58.
                </p>
                <h2>Work experience</h2>
                <p><span>April 2020</span> - <span>December 2020</span> : Freelance Web Developer / Studying</p>
                <p><span>February 2021</span> - <span>Work there currently</span> : Junior Web Developer at Room 58</p>
            </div>
        );
    }
}