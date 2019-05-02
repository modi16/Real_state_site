import React from "react";
import PropTypes from "prop-types";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Card = props => {
	return (
		<div
			className="container bg-light border border-light my-4 p-0 justify-content-center"
			key={props.propertieId}>
			<div className="row filcard my-2 justify-content-center">
				<div className="img-top">
					<img src={props.propertieImage} />{" "}
				</div>
				<div className="col-md-8 my-2 ">
					<h4 className="subheader m-0">{props.propertieTitle}</h4>
				</div>
				<div className="card-body">{props.propertieDescription}</div>
				<div>
					<Link to={"/property/" + props.propertieId}>
						<Button
							className="btn btn-light btn-outline-secondary text-secondary bg-white "
							type="button">
							Find out more!
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	propertieId: PropTypes.number,
	propertieImage: PropTypes.string,
	propertieTitle: PropTypes.string,
	propertieDescription: PropTypes.string
};

export default Card;
