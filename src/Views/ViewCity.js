import React, {Component} from 'react';

class ViewCity extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentWeather = this.props.data;
        console.log(currentWeather);
        const Farenheit = currentWeather.apparentTemperature;
        const icons = {
            "clear-day": "B",
            "clear-night": "C",
            "rain": "R",
            "snow": "G",
            "sleet": "X",
            "wind": "S",
            "fog": "N",
            "cloudy": "Y",
            "partly-cloudy-day": "H",
            "partly-cloudy-night": "I"
        };

        return (
            <div className="cityView">
                <h1>{this.props.city}</h1>
                <div className="temprature">
                    <p className="degrees">{Math.round((Farenheit - 32) * 5 / 9)} &#8451;</p>
                    <p className="icon">{icons[currentWeather.icon]}</p>
                </div>
                <small>wind speed: {currentWeather.windSpeed} km/h</small>
                <p>{currentWeather.summary}</p>
            </div>
        )
    }
}

export default ViewCity;