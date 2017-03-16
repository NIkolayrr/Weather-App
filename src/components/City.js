import React, {Component} from 'react';
import ViewCity from '../Views/ViewCity';
import _makeRequest from '../Requester';
import './City.css';

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {data: 'New Data',city: 'New City'};
        this._handleClick = this._handleClick.bind(this);
        this._handleRequest = this._handleRequest.bind(this);
        this._handleError = this._handleError.bind(this);
    }

    _handleClick(event) {
        let li = event.target;
        let city = li.textContent;
        let coordinates = this.props.cities[city];

        this.setState({
            city: city
        });

        _makeRequest(coordinates.lat,coordinates.lon)
            .then(this._handleRequest)
            .catch(this._handleError);
    }
    _handleRequest(data) {
        let currentWeather = data["currently"];

        this.setState({
            data: currentWeather
        });
    }
    _handleError(error){
        console.log(error);
    }

    render() {
        const {cities} = this.props;
        const cityNames = Object.keys(cities).sort(function(a, b) {
            return a.localeCompare(b);
        });
        const citiesOptions = [];
        cityNames.map((city, index) => {
            citiesOptions.push(<li onClick={this._handleClick} value={city} key={index}>{city}</li>);
        });
        return (
            <div>
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