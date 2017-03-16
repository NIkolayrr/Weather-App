import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import MainView from './components/MainView';
import AboutView from './components/AboutView';
import ChooseCity from './components/ChooseCity';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={MainView} >
                    <IndexRoute component={ChooseCity} />
                    <Route path="/home" component={ChooseCity} />
                    <Route path="/about" component={AboutView} />
                </Route>
            </Router>
        );
    }
}

export default App;