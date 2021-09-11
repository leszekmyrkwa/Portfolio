import React from 'react';
import './Contact.scss';

export default class Contact extends React.Component {

    render() {
        return(
            <div id="Contact">
                <h2>Want me in your team?</h2>
                <h3>Sure you want! Just contact me at:</h3>
                <div className="contact-details">
                    <div>
                        <p>Email: myrkwa97@gmail.com</p>
                    </div>
                    <div>
                        <p>Phone: +44 07518488544</p>
                    </div>
                    <div className="contact-details-linked">
                        <p>LinkedIn: </p>
                        <a href="https://www.linkedin.com/in/leszek-myrkwa-8957401a9/"> LinkedIn Profile</a>
                    </div>
                </div>
            </div>
        );
    }
}