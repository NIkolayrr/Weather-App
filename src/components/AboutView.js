import React, {Component} from 'react';
import './About.css';

class AboutView extends Component {
    render() {
        return (
            <div className="aboutMe">
                <h1>About</h1>
                <p>Created with ReactJS and Dark Sky api</p>
                <small>by <a href="http://nikolayrr.com">nikolayrr</a></small>
            </div>
        )
    }
}

export default AboutView;