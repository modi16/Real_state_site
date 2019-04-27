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
						let found = store.propertyList.find(element => {
							return (
								this.props.match.params.propertyid ===
								element.ID.toString()
							);
						});

						return (
							<div>
								<div>
									<h1 className="display-4">
										{
											store.propertyList[0].acf
												.title_of_post
										}
									</h1>
								</div>
								<div>
									<span />
								</div>
								<div>
									{
										store.propertyList[0].acf
											.price_of_property
									}{" "}
									| {store.propertyList[0].acf.bedrooms} |{" "}
									{store.propertyList[0].acf.bathrooms}
								</div>
								<div>
									{store.propertyList[0].acf.address} .{" "}
									{store.propertyList[0].acf.city} |{" "}
									{store.propertyList[0].acf.zip_code}
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
