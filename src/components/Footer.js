import React from "react";
import './Footer.scss';

export default class Footer extends React.Component {

    getDate() {
        const currentYear = new Date().getFullYear();
        return currentYear;
    }

    render() {
        return(
            <div id="Footer">
                <h3>Created by Leszek Myrkwa, Copyright <span>&copy;</span> {this.getDate()}</h3>
            </div>
        );
    }
}