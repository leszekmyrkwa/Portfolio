import React from "react";
import SkillBar from "./SkillBar";
import './Skills.scss';

export default class Skills extends React.Component {

    skills = [['React', 70],['Javascript', 90],['HTML', 90],['CSS', 80],['Redux', 65],['PHP', 60],['Angular', 65]];

    renderSkillBars() {
        return(
            this.skills.map((skill, i) => {
            return(
                <SkillBar key={i} name={skill[0]} width={skill[1]}/>
            );
        })
        );
    }

    render() {
        return(
            <div id="Skills">
                <div className="skills-top">
                    {this.renderSkillBars()}
                </div>
                <div className="skills-bottom"></div>
            </div>
        );
    }
}