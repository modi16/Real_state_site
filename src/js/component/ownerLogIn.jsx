import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

const OwnerLogInPage = props => {
	return (
		<div>
			<h1 className="tag underline">Owner Registration</h1>

			<div className=" border">
				<div>
					<div ClassName="signup">
						<h2 className="tag">Sign Up</h2>
					</div>
				</div>
				<br />
				<br />

				<div className="button buttonSignUp">
					<div ClassName="facebook">
						<button
							type="button"
							className="btn btn-primary btn-md">
							<i className="fab fa-facebook" /> Facebook
						</button>
					</div>

					<div className="google">
						<button
							type="button"
							className="btn btn-primary btn-md">
							<i className="fab fa-google" /> Google
						</button>
					</div>

					<div className="mail">
						<button
							type="button"
							className="btn btn-primary btn-md">
							<i className="fas fa-envelope-square" /> E-mail and
							Password
						</button>
					</div>
				</div>
				<br />
				<br />

				<div className="login">
					<h3> Have an account?</h3>
					<button type="button" className="btn btn-primary btn-md">
						<i className="fas fa-sign-in-alt" /> Sign In
					</button>
				</div>
			</div>
		</div>
	);
};

export default OwnerLogInPage;
