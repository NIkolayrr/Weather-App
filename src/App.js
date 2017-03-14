import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import City from './components/City';

const cities = {
    sofia:{
        lat: 42.697708,
        lon: 23.321868
    },
    varna:{
        lat: 43.214050,
        lon: 27.914733
    },
    plovdiv:{
        lat: 42.135408,
        lon: 24.745290
    },
    pernik:{
        lat: 32,
        lon: 45
    }
};

class App extends Component {
    componentWillMount(){
        
    }
    render() {
        return (
            <div className="App">
                < Navigation/>
                <City cities = { cities }/>
                < Footer/>
            </div>
        );
    }
}

export default App;
