import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	constructor(props) {
		super(props);
		
		this.renderWeather = this.renderWeather.bind(this);
	}

	renderWeather(cityData) {
		const name = cityData.city.name;
		// Temps array with celsius
		const temps = cityData.list.map(weather => weather.main.temp - 273.15);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const { lon, lat } = cityData.city.coord;

		console.log(temps);
		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={temps} color="orange" units="C"/></td>
				<td><Chart data={humidities} color="green" units="hPa"/></td>
				<td><Chart data={pressures} color="blue" units="%"/></td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (C)</th>
						<th>Humidity (hPa)</th>
						<th>Pressure (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);