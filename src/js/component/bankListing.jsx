import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Banks = props => {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src={props.bankPic}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.bankName}</h5>
				<p className="card-text">{props.bankRate}</p>
				<a href={props.bankApply} className="btn btn-primary">
					Apply Here
				</a>
			</div>
		</div>
	);
};

Banks.propTypes = {
	bankPic: PropTypes.string,
	bankName: PropTypes.string,
	bankRate: PropTypes.number,
	bankApply: PropTypes.string //the function parseTime returns a Moment tag, that's why prop type is object
};

export default Banks;
