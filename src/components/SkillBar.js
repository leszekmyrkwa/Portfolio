import React from "react";
import './SkillBar.scss';

export default class SkillBar extends React.Component {

    render() {
        return (
            <div className="skill-bar">
                <h3>{this.props.name}</h3>
                <div className="skill-bar-inner">
                    <div style={{width: `${this.props.width}%`}}></div>
                </div>
            </div>
        );
    }
}