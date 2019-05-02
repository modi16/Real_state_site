import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export class ContactModal extends React.Component {
	render() {
		return (
			<Modal isOpen={this.props.show}>
				<ModalHeader closeButton>Contact the Seller</ModalHeader>
				<ModalBody>
					<FormGroup>
						<Input
							type="text"
							placeholder="Name"
							className="form-control"
						/>
						<Input type="email" placeholder="Email" />
						<Input type="textarea" />
					</FormGroup>
				</ModalBody>
				<ModalFooter>
					<Button variant="secondary" onClick={this.props.onClose}>
						Close
					</Button>
					<Button variant="primary" onClick={this.props.onClose}>
						Send
					</Button>
				</ModalFooter>
			</Modal>
		);
	}
}
ContactModal.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool
};
