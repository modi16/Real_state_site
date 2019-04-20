import React from "react";
import PropTypes from "prop-types";
import "../../styles/home.css";
import { Link } from "react-router";

const Card = props => {
	return (
		<div
			className="container bg-light border border-light my-4 p-0 justify-content-center"
			key={props.propertieId}>
			<div className="row my-2">
				<div className="col-4 px-4 my-2">
					<h4 className="text-left"> {props.propertieImage} </h4>
				</div>
				<div className="col-8 my-2 ">
					<p className="subheader m-0">
						{" "}
						<a href="">{props.eventName}</a>
					</p>
					<small>
						{" "}
						<a href=""> Meetup {props.eventMeetup}</a>
					</small>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	propertie: PropTypes.array,
	propertieId: PropTypes.number,
	propertieImage: PropTypes.object,
	eventTime: PropTypes.object, //the function parseTime returns a Moment tag, that's why prop type is object
	eventName: PropTypes.string,
	eventMeetup: PropTypes.string
};

export default Card;
