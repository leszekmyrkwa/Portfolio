import React from "react";
import './SkillBar.scss';

export default class SkillBar extends React.Component {

    render() {
        return (
            <div className="skill-container">
                <h3>{this.props.name}</h3>
                <div className={`c100 p${this.props.width}`}>
                    <span>{this.props.width}%</span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                </div>
            </div>
        );
    }
}