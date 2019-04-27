import React from "react";
import { Context } from "../store/appContext.jsx";
import Card from "../component/card.jsx";

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
							return store.filteredList.map(property => {
								return (
									<Card
										key={property.ID}
										propertieImage={
											property.acf.title_of_post
										}
										propertieId={property.ID}
										propertieTitle={
											property.acf.title_of_post
										}
										propertieDescription={
											property.acf.description_of_property
										}
									/>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
