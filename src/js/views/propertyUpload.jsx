import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/propertyUpload.css";

import {
	Col,
	Row,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} from "reactstrap";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

import Select from "react-select";

import SelectUSState from "react-select-us-states";

import ImageUploader from "react-images-upload";

const beds = [
	{ label: "1 Bedroom", value: "Beds1" },
	{ label: "2 Bedrooms", value: "Beds2" },
	{ label: "3 Bedrooms", value: "Beds3" },
	{ label: "4 Bedrooms", value: "Beds4" },
	{ label: "5 Bedrooms", value: "Beds5" },
	{ label: "6 Bedrooms +", value: "Beds6" }
];

const bath = [
	{ label: "1 Bath", value: "Bath1" },
	{ label: "1.5 Baths", value: "Bath1.5" },
	{ label: "2 Baths", value: "Bath2" },
	{ label: "3 Baths", value: "Bath3" },
	{ label: "4 Baths", value: "Bath4" },
	{ label: "5 Baths", value: "Bath5" },
	{ label: "6 Baths", value: "Bath6" }
];

const propertyType = [
	{ label: "House", value: "House" },
	{ label: "Apartment", value: "Apartment" },
	{ label: "Condos/Co-ops", value: "Condo/Coop" },
	{ label: "Townhome", value: "Townhome" },
	{ label: "Manufactured", value: "Manufactured" }
];

const seller = [
	{ label: "Owner", value: "Owner" },
	{ label: "Agent", value: "Agent" }
];

const states = [
	{
		label: "Alabama",
		value: "AL"
	},
	{
		label: "Alaska",
		value: "AK"
	},
	{
		label: "Arizona",
		value: "AZ"
	},
	{
		label: "Arkansas",
		value: "AR"
	},
	{
		label: "California",
		value: "CA"
	},
	{
		label: "Colorado",
		value: "CO"
	},
	{
		label: "Connecticut",
		value: "CT"
	},
	{
		label: "Delaware",
		value: "DE"
	},
	{
		label: "District of Columbia",
		value: "DC"
	},
	{
		label: "Florida",
		value: "FL"
	},
	{
		label: "Georgia",
		value: "GA"
	},
	{
		label: "Hawaii",
		value: "HI"
	},
	{
		label: "Idaho",
		value: "ID"
	},
	{
		label: "Illinois",
		value: "IL"
	},
	{
		label: "Indiana",
		value: "IN"
	},
	{
		label: "Kansas",
		value: "KS"
	},
	{
		label: "Kentucky",
		value: "KY"
	},
	{
		label: "Louisiana",
		value: "LA"
	},
	{
		label: "Maine",
		value: "ME"
	},
	{
		label: "Maryland",
		value: "MD"
	},
	{
		label: "Massachusetts",
		value: "MA"
	},
	{
		label: "Michigan",
		value: "MI"
	},
	{
		label: "Minnesota",
		value: "MN"
	},
	{
		label: "Mississippi",
		value: "MS"
	},
	{
		label: "Missouri",
		value: "MO"
	},
	{
		label: "Montana",
		value: "MT"
	},
	{
		label: "Nebraska",
		value: "NE"
	},
	{
		label: "Nevada",
		value: "NV"
	},
	{
		label: "New Hampshire",
		value: "NH"
	},
	{
		label: "New Jersey",
		value: "NJ"
	},
	{
		label: "New Mexico",
		value: "NM"
	},
	{
		label: "New York",
		value: "NY"
	},
	{
		label: "North Carolina",
		value: "NC"
	},
	{
		label: "North Dakota",
		value: "ND"
	},
	{
		label: "Ohio",
		value: "OH"
	},
	{
		label: "Oklahoma",
		value: "OK"
	},
	{
		label: "Oregon",
		value: "OR"
	},
	{
		label: "Pennsylvania",
		value: "PA"
	},
	{
		label: "Rhode Island",
		value: "RI"
	},
	{
		label: "South Coralina",
		value: "SC"
	},
	{
		label: "South Dakota",
		value: "SD"
	},
	{
		label: "Tennessee",
		value: "TN"
	},
	{
		label: "Texas",
		value: "TX"
	},
	{
		label: "Utah",
		value: "UT"
	},
	{
		label: "Vermont",
		value: "VT"
	},
	{
		label: "Virginia",
		value: "VA"
	},
	{
		label: "Washington",
		value: "WA"
	},
	{
		label: "West Virginia",
		value: "WV"
	},
	{
		label: "Wisconsin",
		value: "WI"
	},
	{
		label: "Wyoming",
		value: "WY"
	}
];

const country = [{ label: "United States", value: "USA" }];

const pool = [
	{ label: "Yes", value: "poolYes" },
	{ label: "No", value: "poolNo" }
];

const priceRange = [
	{ label: "$0 - $100k", value: "0-100000" },
	{ label: "$100k - $299,999", value: "100000-299999" },
	{ label: "$300k - $499,999", value: "300000-499999" },
	{ label: "$500k - $799,999", value: "500000-99999" },
	{ label: "$500k - $799,999", value: "500000-799999" },
	{ label: "$800k +", value: "800000+" }
];

const images = [
	{ label: "image", value: "" },
	{ label: "image1", value: "" },
	{ label: "image2", value: "" },
	{ label: "image3", value: "" },
	{ label: "image4", value: "" },
	{ label: "image4", value: "" }
];

export class PropertyUpload extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dropdownOpen: false,
			Seller: "",
			States: "",
			Country: "",
			PropertyType: "",
			Bedrooms: "",
			Baths: "",
			Pool: "",
			selectedOption8: "",
			selectedOption9: "",
			listingTitle: "",
			address: "",
			city: "",
			zipCode: "",
			yearBuilt: "",
			squareFeet: "",
			lotSize: "",
			PriceRange: "",
			imgArr: [],
			ImagesObjArr: [
				{
					image: "",
					image1: "",
					image2: "",
					image3: "",
					image4: "",
					image5: ""
				}
			]
		};

		this.toggle = this.toggle.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onDrop = this.onDrop.bind(this);
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	handleSubmit(event) {
		alert("A name was submitted: " + this.state.value);
		event.preventDefault();
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleInput(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onDrop2(picture) {
		this.setState({
			imgArr: this.state.imgArr.concat(picture)
		});
	}

	onDrop(imgArr) {
		this.setState({ imgArr });
	}

	render() {
		const { Seller } = this.state.Seller;
		const { States } = this.state.States;
		const { PriceRange } = this.state.PriceRange;
		const { Country } = this.state.Country;
		const { PropertyType } = this.state.PropertyType;
		const { Bedrooms } = this.state.Bedrooms;
		const { Baths } = this.state.Baths;
		const { Pool } = this.state.Pool;
		const files = this.state.imgArr.map(file => (
			<li key={file.name}>
				{file.name} - {file.size} bytes
			</li>
		));

		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div id="propertyUpload-Wrapper">
							<Form onSubmit={e => this.handleSubmit}>
								<div className="container">
									<div className="row">
										<div className="col-md-4 mb-4">
											<h1 className="p-2">
												List Your Property
											</h1>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row">
										<div className="col-md-4 mb-4">
											<Label
												for="propertyTitle"
												style={{ fontWeight: "bold" }}>
												Property Title
											</Label>
											<Input
												type="text"
												value={this.state.listingTitle}
												name="listingTitle"
												placeholder="e.g. Beautiful beach condo"
												onChange={e =>
													this.handleChange(e)
												}
											/>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row">
										<div className="col-sm-8 mb-4">
											<label
												style={{ fontWeight: "bold" }}>
												Property Address
											</label>
											<Input
												type="text"
												value={this.state.address}
												name="address"
												placeholder="Address e.g. 1234 St."
												onChange={e =>
													this.handleChange(e)
												}
											/>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row">
										<div className="col-md-4 mb-4">
											<Select
												value={States}
												placeholder="States"
												onChange={e => {
													console.log(e);
													this.setState({
														States: e.label
													});
												}}
												options={states}
											/>
										</div>
										<div className="col-sm-4  mb-4">
											<Input
												type="text"
												value={this.state.city}
												name="city"
												placeholder="City e.g. Miami"
												onChange={e =>
													this.handleChange(e)
												}
											/>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row">
										<div className="col-md-4 mb-4">
											<Select
												value={Country}
												placeholder="Country"
												onChange={e => {
													console.log(e);
													this.setState({
														Country: e.label
													});
												}}
												options={country}
											/>
										</div>
										<div className="col-md-4 mb-4">
											<Input
												type="text"
												value={this.state.zipCode}
												name="zipCode"
												placeholder="Zip Code e.g. 33193"
												onChange={e =>
													this.handleChange(e)
												}
											/>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row">
										<div className="col-md-4">
											<Label
												for="propertyType"
												style={{ fontWeight: "bold" }}>
												Property Type
											</Label>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row">
										<div className="col-md-4 mb-4">
											<Select
												value={PropertyType}
												placeholder="House, Condo..."
												onChange={e => {
													console.log(e);
													this.setState({
														PropertyType: e.label
													});
												}}
												options={propertyType}
											/>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row">
										<div className="col-md-4">
											<Label
												for="propertyType"
												style={{ fontWeight: "bold" }}>
												Property Features
											</Label>
											<div className="mb-4">
												<Input
													type="text"
													value={this.state.yearBuilt}
													name="yearBuilt"
													placeholder="Year built e.g. 1973"
													onChange={e =>
														this.handleChange(e)
													}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row mb-4">
										<div className="col-md-4">
											<Select
												value={Bedrooms}
												placeholder="Bedrooms"
												onChange={e => {
													console.log(e);
													this.setState({
														Bedrooms: e.label
													});
												}}
												options={beds}
											/>
										</div>
									</div>
									<div className="row mb-4">
										<div className="col-md-4">
											<Select
												value={Baths}
												placeholder="Baths"
												onChange={e => {
													console.log(e);
													this.setState({
														Baths: e.label
													});
												}}
												options={bath}
											/>
										</div>
									</div>
									<div className="row mb-4">
										<div className="col-md-4">
											<Select
												value={Pool}
												placeholder="Pool"
												onChange={e => {
													console.log(e);
													this.setState({
														Pool: e.label
													});
												}}
												options={pool}
											/>
										</div>
									</div>
									<div className="row mb-4">
										<div className="col-md-4">
											<Input
												type="text"
												value={this.state.squareFeet}
												name="squareFeet"
												placeholder="Square feet e.g. 2000 s.f."
												onChange={e =>
													this.handleChange(e)
												}
											/>
										</div>
									</div>
									<div className="row mb-4">
										<div className="col-md-4">
											<Input
												type="text"
												value={this.state.lotSize}
												name="lotSize"
												placeholder="Lot size e.g. 4000 s.f."
												onChange={e =>
													this.handleChange(e)
												}
											/>
										</div>
									</div>

									<div className="row">
										<div className="col-md-4 mb-4">
											<Label
												for="propertyType"
												style={{ fontWeight: "bold" }}>
												Property Description
											</Label>
											<Input
												row="5"
												type="textarea"
												value={this.state.description}
												name="propertyDescription"
												placeholder="e.g. Beautiful house by the lake with impressive view!"
												onChange={e =>
													this.handleChange(e)
												}
											/>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row mb-4">
										<div className="col-md-4">
											<Label
												for="propertyPrice"
												style={{ fontWeight: "bold" }}>
												Price
											</Label>
											<Input
												type="text"
												value={this.state.price}
												name="propertyPrice"
												placeholder="$ Price"
												onChange={e =>
													this.handleChange(e)
												}
											/>
										</div>
										<div className="col-md-4">
											<Label
												for="priceRange"
												style={{ fontWeight: "bold" }}>
												Price Range
											</Label>
											<Select
												value={PriceRange}
												placeholder="e.g. $0 - $100k"
												onChange={e => {
													console.log(e);
													this.setState({
														priceRange: e.label
													});
												}}
												options={priceRange}
											/>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row mb-4">
										<div className="col-md-4">
											<Label
												for="priceRange"
												style={{ fontWeight: "bold" }}>
												Upload Images
											</Label>
											<ImageUploader
												fileSizeError="file size is too big"
												fileTypeError="is not supported file extension"
												withPreview={true}
												withIcon={false}
												buttonText="Choose images"
												onChange={this.onDrop}
												imgExtension={[
													".jpg",
													".gif",
													".png",
													".gif"
												]}
												maxFileSize={5242880}
											/>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row mb-4">
										<div className="col-md-4 text-center">
											<Button
												className="btn-lg"
												onClick={e => {
													actions.uploadProperty(
														this.state
													);
												}}
												color="primary"
												type="submit"
												value="Submit">
												List It!
											</Button>
										</div>
									</div>
								</div>
							</Form>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
