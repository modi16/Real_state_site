import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

const OwnerLogInPage = props => {
	return (
		<body>
			<div className="container">
				<a className="name" href="#">
					ACTION Z
				</a>
			</div>

			<div className="container-fluid">
				<h1>Owner Registration</h1>
				<div ClassName="signup">
					<h2>Sign Up</h2>
				</div>
			</div>
			<br />
			<br />

			<div className="button">
				<div ClassName="facebook">
					<button type="button" class="btn btn-primary btn-md">
						<i class="fab fa-facebook" /> Facebook
					</button>
				</div>
				<br />
				<div className="google">
					<button type="button" class="btn btn-primary btn-md">
						<i className="fab fa-google" /> Google
					</button>
				</div>
				<br />
				<div className="mail">
					<button type="button" class="btn btn-primary btn-md">
						<i className="fas fa-envelope-square" /> E-mail and
						Password
					</button>
				</div>
			</div>
			<br />
			<br />
			<br />

			<div className="login">
				<h3> Have an account?</h3>
				<button type="button" class="btn btn-primary btn-md">
					<i className="fas fa-sign-in-alt" /> Sign In
				</button>
			</div>
		</body>
	);
};

export default OwnerLogInPage;
