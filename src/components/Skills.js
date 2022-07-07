import React from "react";
import SkillBar from "./SkillBar";
import './Skills.scss';

export default class Skills extends React.Component {

    skills = [['Javascript', 90],['HTML', 90],['CSS', 90],['React', 50],['Angular', 50],['Redux', 50],['PHP', 70],['WordPress', 80]];

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