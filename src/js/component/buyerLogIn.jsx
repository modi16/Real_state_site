import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import image1 from "../../img/background-buyer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import Popup from "reactjs-popup";
import { Button } from "react-bootstrap";
import Modal from "react-responsive-modal";
import ReactDOM from "react-dom";

const BuyerLogInPage = props => {
	return (
		<body>
			<div className="container">
				<a className="name" href="#">
					ACTION Z
				</a>
			</div>

			<div className="container-fluid">
				<h1>Buyer Registration</h1>
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
						<i class="fab fa-google" /> Google
					</button>
				</div>
				<br />
				<div className="mail">
					<button type="button" class="btn btn-primary btn-md">
						<i class="fas fa-envelope-square" /> E-mail and Password
					</button>
				</div>
			</div>
			<br />
			<br />

			<div className="login">
				<h3> Have an account?</h3>
				<button type="button" class="btn btn-primary btn-md">
					<i class="fas fa-sign-in-alt" /> Sign In
				</button>
			</div>
		</body>
	);
};

export default BuyerLogInPage;
