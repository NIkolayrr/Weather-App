import React, {Component} from 'react';
import {Link} from 'react-router';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <header className="site-header">
                <nav>
                    <ul>
                        <li className="logo"><Link to="/home" activeClassName="active">Weather-App</Link></li>
                        <li><Link to="/home" activeClassName="active">Home</Link></li>
                        <li><Link to="/about" activeClassName="active">About</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navigation;