import React from "react";
import { Context } from "../store/appContext.jsx";
import Card from "../component/card.jsx";
import backg from "../../img/backg.jpg";

import "../../styles/home.css";
import Filters from "../component/filterByPrice.jsx";

export class Detail extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Filters />
				</div>

				<div>
					<Context.Consumer>
						{({ store, actions }) => {
							if (store.filteredList.length == 0) {
								return (
									<div
										className="detail1"
										style={{
											backgroundImage:
												"url(" + backg + ") "
										}}
									/>
								);
							} else {
								return store.filteredList.map(property => {
									return (
										<Card
											key={property.ID}
											propertieImage={property.acf.image}
											propertieId={property.ID}
											propertieTitle={
												property.acf.title_of_post
											}
											propertieDescription={
												property.acf
													.description_of_property
											}
										/>
									);
								});
							}
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
