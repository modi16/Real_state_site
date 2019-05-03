import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { ContactModal } from "../component/contactModal.jsx";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Notify } from "bc-react-notifier";

export class Single extends React.Component {
	constructor(props) {
		super(props);

		this.state = { isOpen: false };
	}

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						let propertyId = this.props.match.params.theid;

						let found = actions.findProperty(propertyId);

						console.log(found);
						if (typeof found == "undefined") {
							Notify.error("Loading");
							return null;
						}
						return (
							<div>
								<div>
									<h1 className="display-4">
										{found.acf.title_of_post}
									</h1>
								</div>
								<div>
									<span />
								</div>
								<div>
									${found.acf.price_of_property} |{" "}
									{found.acf.bedrooms} | {found.acf.bathrooms}
								</div>
								<div>
									{found.acf.address} . {found.acf.city} |{" "}
									{found.acf.zip_code}
								</div>
								<div>{found.acf.description_of_property}</div>
							</div>
						);
					}}
				</Context.Consumer>

				<hr className="my-4" />

				<Link to="/">
					<span className="btn btn-primary btn-lg" role="button">
						Back home
					</span>
				</Link>
				<Button
					variant="primary"
					role="button"
					onClick={this.toggleModal}>
					Contact the Seller
				</Button>
				<ContactModal
					show={this.state.isOpen}
					onClose={this.toggleModal}
				/>
			</div>
		);
	}
}

Single.propTypes = {
	match: PropTypes.object
};
