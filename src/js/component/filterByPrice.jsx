import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

class Filters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			priceFilter: "",
			typeFilter: "",
			bdFilter: ""
		};
	}

	render() {
		const { priceFilter, typeFilter, bdFilter } = this.state;

		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div className="row filterBar">
								<div className="col-md-3">
									<FormGroup>
										<Input
											type="select"
											name="select"
											onChange={e => {
												this.setState({
													typeFilter: e.target.value
												});
											}}
											//	defaultValue="Please choose..."
											id="typeFilter">
											<option default>
												Please Choose...
											</option>
											<option value="House">House</option>
											<option value="Condo">Condo</option>
											<option value="Apartment">
												Apartment
											</option>
										</Input>
									</FormGroup>
								</div>
								<div className="col-md-3">
									<FormGroup>
										<Input
											type="select"
											name="select"
											onChange={e => {
												this.setState({
													priceFilter: e.target.value
												});
											}}
											//defaultValue="Please choose..."
											id="priceFilter">
											<option default>
												Please Choose...
											</option>
											<option value="0-100000">
												-$100,000
											</option>
											<option value="100000-299999">
												$100,000 - $299,999
											</option>
											<option value="300000-499999">
												$300,000 - $499,999
											</option>
											<option value="500000-799999">
												$500,000 - $799,999
											</option>
											<option value="800000+">
												$800,000+
											</option>
										</Input>
									</FormGroup>
								</div>
								<div className="col-md-3">
									<FormGroup>
										<Input
											type="select"
											name="select"
											onChange={e => {
												this.setState({
													bdFilter: e.target.value
												});
											}}
											//defaultValue="Please choose..."
											id="bdFilter">
											<option default>
												Please Choose...
											</option>
											<option value="Studio">
												Studio
											</option>
											<option value="1">1bd</option>
											<option value="2">2bd</option>
											<option value="3">3bd</option>
											<option value="4">4bd+</option>
										</Input>
									</FormGroup>
								</div>
								<div className="col-md-3 text-right">
									<Button
										className="btn btn-light btn-outline-secondary text-secondary bg-white "
										id="dataPost"
										type="button"
										onClick={e => {
											actions.infopass(this.state);
										}}>
										<i className="fas fa-filter">Filter</i>
									</Button>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

export default Filters;
