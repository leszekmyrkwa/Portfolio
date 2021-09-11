import React from "react";
import './Projects.scss';
import KeeperImg from '../image/projects/keeper.png';
import MaptyImg from '../image/projects/mapty.png';
import GuessImg from '../image/projects/guess.png';

export default class Projects extends React.Component {

    projects = [{
        name: 'ToDo List',
        url: 'https://leszek-keeper.netlify.app/',
        img: KeeperImg
    },{
        name: 'Mapty',
        url: 'https://leszek-mapty.netlify.app/',
        img: MaptyImg
    }, {
        name: 'Guess game',
        url: 'https://leszek-jsgame.netlify.app/',
        img: GuessImg
    }]

    renderProjects() {
        return(
            this.projects.map((project, i) => {
                return(
                    <div className="project" key={i}>
                        <div className="project-name">
                            <p>{project.name}</p>
                        </div>
                        <img src={project.img} alt={project.name}></img>
                        <a href={project.url}>Click to check</a>
                    </div>
                );
            })
        );
    }

    render() {
        return(
            <div id="Projects">
                <h2>My projects</h2>
                {this.renderProjects()}
            </div>
        );
    }
}