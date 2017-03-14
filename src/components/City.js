import React, {Component} from 'react';
import ViewCity from '../Views/ViewCity';
import './City.css';
import $ from 'jquery';

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {data: 'New Data',city: 'New City'};
        this._handleClick = this._handleClick.bind(this);
        this._handleRequest = this._handleRequest.bind(this);
    }

    _handleClick(event) {
        let li = event.target;
        let city = li.textContent;
        let coordinates = this.props.cities[city];

        this.setState({
           city: city
        });

        $.ajax({
            method: 'GET',
            url: "https://api.darksky.net/forecast/75a865c6e798d8b985688c027348ba0d/" + coordinates.lat + "," + coordinates.lon,
            dataType: 'jsonp'
        })
            .then(this._handleRequest)
            .catch(function (error) {
                console.log(error);
            })
    }

    _handleRequest(data) {
        let currentWeather = data["currently"];
        console.log(data);
        this.setState({
            data: currentWeather
        });
    }

    render() {
        const {cities} = this.props;
        const cityNames = Object.keys(cities);
        const citiesOptions = [];
        cityNames.map((city, index) => {
            citiesOptions.push(<li onClick={this._handleClick} value={city} key={index}>{city}</li>);
        });
        return (
            <div>
                <h1>Choose A City</h1>
                <ul className="cityNav">
                    {citiesOptions}
                </ul>
                <ViewCity data={this.state.data} city={this.state.city}/>
            </div>
        );
    }
}

City.propTypes = {
    cities: React.PropTypes.object.isRequired,
    data: React.PropTypes.object,
    city: React.PropTypes.string
};

export default City;