import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		
		this.onInputChange = this.onInputChange.bind(this);

		this.state = { term: ''};
	}

	onInputChange(event) {
		this.setState({
			term: event.target.value
		});
	}

	onFormSubmit = (event) => {
		// prevent page refresh
		event.preventDefault();
		// call action creator to fetch weather data
		this.props.fetchWeather(this.state.term);

		this.setState({
			term: ''
		})
	};

	render () {
		return (
			<form 
			className="input-group" onSubmit={this.onFormSubmit}>
				<input
				placeholder="Get a five-day forecast in your favorite cities"
				className="form-control"
				value={this.state.term}
				onChange={this.onInputChange} 
				/>
				<span className="input-group-btn">
					<button className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);