import React, {Component} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

class MainView extends Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
                <main>{this.props.children}</main>
                <Footer/>
            </div>
        )
    }
}

export default MainView;