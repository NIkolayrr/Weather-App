import React, {Component} from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className="nav-bar">
                <ul>
                    <li>
                        <a href="#">home</a>
                    </li>
                    <li>
                        <a href="#">about</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;