import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { ContactModal } from "../component/contactModal.jsx";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import { Notify } from "bc-react-notifier";

//require("react-carousel/lib/carousel.css");

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
			<div className="jumbotron">
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
								<div
									id="carouselExampleSlidesOnly"
									className="carousel slide px-2"
									data-ride="carousel">
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img
												className="d-block w-100 img-fluid"
												src={found.acf.image}
												alt="First slide"
											/>
										</div>
										<div className="carousel-item">
											<img
												className="d-block w-100 img-fluid"
												src={found.acf.image1}
												alt="Second slide"
											/>
										</div>
										<div className="carousel-item">
											<img
												className="d-block w-100 img-fluid"
												src={found.acf.image2}
												alt="Third slide"
											/>
										</div>
									</div>
									<a
										className="carousel-control-prev"
										href="#carouselExampleControls"
										role="button"
										data-slide="prev">
										<span
											className="carousel-control-prev-icon"
											aria-hidden="true"
										/>
										<span className="sr-only">
											Previous
										</span>
									</a>
									<a
										className="carousel-control-next"
										href="#carouselExampleControls"
										role="button"
										data-slide="next">
										<span
											className="carousel-control-next-icon"
											aria-hidden="true"
										/>
										<span className="sr-only">Next</span>
									</a>
								</div>
								<div>
									<h1 className="display-4 postTitle">
										{found.acf.title_of_post}
									</h1>
								</div>

								<div className="summary">
									${found.acf.price_of_property} |{" "}
									{found.acf.bedrooms} Bd|{" "}
									{found.acf.bathrooms} Bathrooms
								</div>
								<div className="address">
									{found.acf.address} . {found.acf.city} |{" "}
									{found.acf.zip_code}
								</div>
								<div className="descrip">
									{found.acf.description_of_property}
								</div>
							</div>
						);
					}}
				</Context.Consumer>
				<hr className="my-4" />

				<hr className="my-4" />

				<Link to="/">
					<Button
						className="btn btn-light btn-outline-secondary text-secondary bg-white ml-2 mb-5 bhome"
						type="button">
						Back home
					</Button>
				</Link>
				<Button
					className="btn btn-light btn-outline-secondary text-secondary bg-white mr-2 mb-5 contactsell"
					type="button"
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
