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
export class PropertyUpload extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}
	render() {
		return (
			<wrapper>
				<div id="propertyUploadConfirmation-Wrapper">
					<div>
						<h1 className="p-2">Review your listing</h1>
					</div>
					<Form>
						<div>
							<Label for="propertyTitle">Property Title</Label>
							<Row form>
								<Col xs={6} md={6} lg={4} className="p-2">
									<FormGroup>
										<Input
											type="text"
											name="listingTitle"
											id="propertyTitle"
											placeholder="Beautiful beach condo"
										/>
									</FormGroup>
								</Col>
							</Row>
						</div>
						<div>
							<label className="p-2">Property Address</label>
							<Row form>
								<Col xs={6} md={6} lg={4} className="p-2">
									<FormGroup>
										<Input
											type="text"
											name="address"
											id="propertyAddress"
											placeholder="1234 Main St"
										/>
									</FormGroup>
								</Col>
								<Col xs={6} md={6} lg={4} className="p-2">
									<FormGroup>
										<Input
											type="text"
											name="address"
											id="propertyCity"
											placeholder="City"
										/>
									</FormGroup>
								</Col>
							</Row>
						</div>
						<Row form>
							<Col xs={6} md={6} lg={4} className="p-2">
								<FormGroup>
									<Input
										type="text"
										name="state"
										id="propertyState"
										placeholder="State"
									/>
								</FormGroup>
							</Col>
							<Col xs={6} md={6} lg={4} className="p-2">
								<FormGroup>
									<Input
										type="text"
										name="zip"
										id="propertyZip"
										placeholder="Zip Code"
									/>
								</FormGroup>
							</Col>
						</Row>	
						<Row form>	
							<Col xs={6} md={6} lg={4} className="p-2">
								<FormGroup>
									<Input
										type="text"
										name="country"
										id="propertyCountry"
										placeholder="Country"
									/>
								</FormGroup>
							</Col>	
						</Row>
						<Row form>
							<Col xs={6} md={6} lg={4} className="p-2">
								<FormGroup>
									<Label for="propertyTye">
										PropertyType
									</Label>
									<Input
										type="email"
										name="email"
										id="exampleEmail"
										placeholder="Property Type"
									/>
								</FormGroup>
							</Col>
							<Col xs={6} md={6} lg={4} className="p-2">
								<FormGroup>
									<Label for="exampleText">Description</Label>
									<Input
										type="textarea"
										name="text"
										id="propertyDescription"
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row form>
							<Col xs={6} md={6} lg={4} className="p-2">
								<FormGroup>
									<Label for="propertyPrice">Price</Label>
									<Input
										type="text"
										name="listingPrice"
										id="propertyPrice"
										placeholder="$ Price"
									/>
								</FormGroup>
							</Col>
							<Col xs={6} md={6} lg={6} className="p-2">
								<FormGroup>
									<Label for="propertyPictures">
										Upload Pictures
									</Label>
									<Input
										type="file"
										name="file"
										id="propertyPictures"
									/>
									<FormText color="muted">
										You can upload up to 12 images of your
										property.
									</FormText>
								</FormGroup>
							</Col>
						</Row>
						<Button color="primary">List It!</Button>
					</Form>
				</div>
			</wrapper>
		);
	}
}
