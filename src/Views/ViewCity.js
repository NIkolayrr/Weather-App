import React, {Component} from 'react';

class ViewCity extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentWeather = this.props.data;
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
            <div>
                <h1>{this.props.city}</h1>
                <p>{Math.round((Farenheit - 32) * 5 / 9)} &#8451;</p>
                <p>{currentWeather.summary}</p>
                <p className="icon">{icons[currentWeather.icon]}</p>
            </div>
        )
    }
}

export default ViewCity;