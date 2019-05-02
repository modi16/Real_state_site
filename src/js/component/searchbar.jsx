import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { Cards } from "../component/homecards.jsx";

class Search extends Component {
	constructor(props) {
		super();
		this.state = {
			searchFilterCity: ""
			//searchFilterZipCode: ""
		};
	}

	updateSearchCity(event) {
		this.setState({
			searchFilterCity: event.target.value.substr(0, 20)
		});
	}

	render() {
		//const { searchFilterCity, searchFilterZipCode } = this.state;

		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="input-group md-form form-sm form-2 pl-0">
							<input
								className="form-control my-0 py-1 red-border"
								type="text"
								onChange={this.updateSearchCity.bind(this)}
								placeholder="Search"
								aria-label=" Search"
							/>
							<div className="input-group-append">
								<Link to={"/search"}>
									<button
										type="button"
										onClick={e => {
											actions.search(this.state);
										}}
										className="btn btn-primary btn-lg">
										Search..
									</button>
								</Link>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
export default Search;
