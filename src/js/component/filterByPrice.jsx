import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

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
			<div className="container">
				<div className="row filterBar">
					<div className="col-md-3">
						<FormGroup>
							<Input type="select" name="select" id="typeFilter">
								<option value="" disabled selected>
									Please Choose...
								</option>
								<option
									value="House"
									onChange={e => {
										this.setState({
											typeFilter: e.value
										});
									}}>
									House
								</option>
								<option
									value="Condo"
									onChange={e => {
										this.setState({
											typeFilter: e.value
										});
									}}>
									Condo
								</option>
								<option
									value="Apartment"
									onChange={e => {
										this.setState({
											typeFilter: e.value
										});
									}}>
									Apartment
								</option>
							</Input>
						</FormGroup>
					</div>
					<div className="col-md-3">
						<FormGroup>
							<Input type="select" name="select" id="priceFilter">
								<option value="" disabled selected>
									Please Choose...
								</option>
								<option
									value="0-100000"
									onChange={e => {
										this.setState({
											priceFilter: e.value
										});
									}}>
									-$100,000
								</option>
								<option
									value="100000-299999"
									onChange={e => {
										this.setState({
											typeFilter: e.value
										});
									}}>
									$100,000 - $299,999
								</option>
								<option
									value="300000-499999"
									onChange={e => {
										this.setState({
											typeFilter: e.value
										});
									}}>
									$300,000 - $499,999
								</option>
								<option
									value="500000-799999"
									onChange={e => {
										this.setState({
											typeFilter: e.value
										});
									}}>
									$500,000 - $799,999
								</option>
								<option
									value="800000+"
									onChange={e => {
										this.setState({
											typeFilter: e.value
										});
									}}>
									$800,000+
								</option>
							</Input>
						</FormGroup>
					</div>
					<div className="col-md-3">
						<FormGroup>
							<Input type="select" name="select" id="bdFilter">
								<option value="" disabled selected>
									Please Choose...
								</option>
								<option
									value="Studio"
									onChange={e => {
										this.setState({
											bdFilter: e.value
										});
									}}>
									Studio
								</option>
								<option
									value="1"
									onChange={e => {
										this.setState({
											bdFilter: e.value
										});
									}}>
									1bd
								</option>
								<option
									value="2"
									onChange={e => {
										this.setState({
											bdFilter: e.value
										});
									}}>
									2bd
								</option>
								<option
									value="3"
									onChange={e => {
										this.setState({
											bdFilter: e.value
										});
									}}>
									3bd
								</option>
								<option
									value="4"
									onChange={e => {
										this.setState({
											bdFilter: e.value
										});
									}}>
									4bd+
								</option>
							</Input>
						</FormGroup>
					</div>
					<div className="col-md-3 text-right">
						<Button
							className="btn btn-light btn-outline-secondary text-secondary bg-white "
							id="dataPost"
							type="submit">
							<i className="fas fa-filter">Filter</i>
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default Filters;
