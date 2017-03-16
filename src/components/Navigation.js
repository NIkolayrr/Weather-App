import React, {Component} from 'react';
import {Link} from 'react-router';

class Navigation extends Component {
    render() {
        return (
            <header className="site-header">
                <h1>Dope weather</h1>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navigation;