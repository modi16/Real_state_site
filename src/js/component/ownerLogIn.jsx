import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

const OwnerLogInPage = props => {
	return (
		<div className=" border form-wrapper">
			<div>
				<h1>Owner Registration</h1>
				<div ClassName="signup" />
			</div>
			<br />
			<br />

			<div className="button">
				<div ClassName="facebook">
					<button type="button" className="btn btn-primary btn-md">
						<i className="fab fa-facebook" /> Facebook
					</button>
				</div>
				<br />
				<div className="google">
					<button type="button" className="btn btn-primary btn-md">
						<i className="fab fa-google" /> Google
					</button>
				</div>
				<br />
				<div className="mail">
					<Link to={"/registration"}>
						<button
							type="button"
							className="btn btn-primary btn-md">
							<i className="fas fa-envelope-square" /> E-mail and
							Password
						</button>
					</Link>
				</div>
			</div>
			<br />
			<br />
			<br />

			<div className="login">
				<h3> Have an account?</h3>
				<button type="button" className="btn btn-primary btn-md">
					<i className="fas fa-sign-in-alt" /> Sign In
				</button>
			</div>
		</div>
	);
};

export default OwnerLogInPage;
