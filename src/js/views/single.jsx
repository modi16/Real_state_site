import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import ImageGallery from "react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

export class Single extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						//	let propertyId = this.props.match.params.theid;

						let found = store.propertyList.find(element => {
							return (
								this.props.match.params.theid ===
								element.ID.toString()
							);
						});

						//	title_of_post= {typeof found === "undefined" ? "Property not Found" : found.acf.title_of_post}
						console.log(found);
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
									{store.found.acf.bedrooms} |{" "}
									{store.found.acf.bathrooms}
								</div>
								<div>
									{store.found.acf.address} .{" "}
									{store.found.acf.city} |{" "}
									{store.found.acf.zip_code}
								</div>
								<div>
									{
										store.propertyList[0].acf
											.description_of_property
									}
								</div>
							</div>
						);
					}}
				</Context.Consumer>

				<Link to="/">
					<span
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Contact the Seller
					</span>
				</Link>
			</div>
		);
	}
}

Single.propTypes = {
	match: PropTypes.object
};
