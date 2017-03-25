import React, {Component} from 'react';
import City from './City';
import CityJson from '../../cities.json';

class ChooseCity extends Component{
    render(){
        return(
            <div>
                <City cities = { CityJson }/>
            </div>
        )
    }
}

export default ChooseCity;