import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../img/house1.jpg";

const Header = props => {
	return (
		<div className="heading1">
			<div className="header">
				<img className="logo" src={logo} />
			</div>
			<h1 className="underline">Banks and Mortgage </h1>
		</div>
	);
};

// Banks.propTypes = {
// 	bankPic: PropTypes.string,
// 	bankName: PropTypes.string,
// 	bankRate: PropTypes.number,
// 	bankApply: PropTypes.string //the function parseTime returns a Moment tag, that's why prop type is object
// };

export default Header;
