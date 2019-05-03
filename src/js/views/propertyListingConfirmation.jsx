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
export class UploadConfirmation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<wrapper>
				<div className="row mb-4" id="uploadConfirmationDiv">
					<div className="col-md-4 text-center text-size-lg">
						<p className="font-weight-bold">
							Congratulations your property is listed!
						</p>
					</div>
				</div>
				<div className="row mb-4">
					<div className="col-md-4 text-center">
						<Button
							className="btn-lg"
							href={"/"}
							color="primary"
							type="submit"
							value="Submit">
							Search property
						</Button>
					</div>
				</div>
				<div className="row mb-4">
					<div className="col-md-4 text-center">
						<Button
							className="btn-lg"
							href={"/uploadProperty"}
							color="primary"
							type="submit"
							value="Submit">
							List another property
						</Button>
					</div>
				</div>
			</wrapper>
		);
	}
}
