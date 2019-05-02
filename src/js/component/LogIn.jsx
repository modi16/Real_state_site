import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";
import FormGroup from "react-bootstrap/FormGroup";

const LogInPage = props => {
	return (
		<boddy>
			<div className="titlle">
				<h1>Sign Up</h1>
				<h3>Please fill in this form to create an account.</h3>
			</div>

			<div className="label">
				<br />
				<div className="last-name">
					<form>
						<Form.Group controlId="formGroupLastN">
							<h5>
								<Form.Label>Last Name</Form.Label>
							</h5>
							<Form.Control
								type="Last Name"
								placeholder="Enter your Last Name"
							/>
						</Form.Group>
					</form>
				</div>
				<div className="first-name">
					<form>
						<Form.Group controlId="formGroupFirstN">
							<h5>
								<Form.Label>First Name</Form.Label>
							</h5>
							<Form.Control
								type="First Name"
								placeholder="Enter your First Name"
							/>
						</Form.Group>
					</form>
				</div>
				<div className="email">
					<form>
						<Form.Group controlId="formGroupEmail">
							<h5>
								<Form.Label>E-mail</Form.Label>
							</h5>
							<Form.Control
								type="Email"
								placeholder="Enter your Email Address"
							/>
						</Form.Group>
					</form>
				</div>
				<div className="Password">
					<form>
						<Form.Group controlId="formGroupPassword">
							<h5>
								<Form.Label>Password</Form.Label>
							</h5>
							<Form.Control
								type="hidden text"
								placeholder="Enter your Password"
							/>
						</Form.Group>
					</form>
				</div>
				<div className="Password">
					<form>
						<Form.Group controlId="formGroupPassword">
							<h5>
								<Form.Label>Repeat Password</Form.Label>
							</h5>
							<Form.Control
								type="Password"
								placeholder="Repeat your Password"
							/>
						</Form.Group>
					</form>
				</div>

				<div className="checkbox">
					<Form.Group id="formGridCheckbox">
						<Form.Check type="checkbox" label="Save Password" />
					</Form.Group>
				</div>
				<p>
					By creating an account you agree to our{" "}
					<a href="#">Terms & Privacy</a>.
				</p>

				<div className="agree">
					<button type="button" class="btn btn-primary btn-md">
						Disagree
					</button>
				</div>
				<div className="disagree">
					<button type="button" class="btn btn-primary btn-md">
						Agree
					</button>
				</div>
			</div>
		</boddy>
	);
};

export default LogInPage;
