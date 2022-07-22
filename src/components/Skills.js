import React from "react";
import SkillBar from "./SkillBar";
import './Skills.scss';

export default class Skills extends React.Component {

    skills = [['Javascript', 90], ['HTML', 85], ['CSS', 80], ['React', 65], 
    ['Angular', 60], ['Git', 60], ['WordPress', 75], ['PHP', 50]];

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