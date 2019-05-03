import React from "react";
import { Context } from "../store/appContext.jsx";

import logo1 from "../../img/home2.jpg";
import "../../styles/home.css";
import Search from "../component/searchbar.jsx";
import { Cards } from "../component/homecards.jsx";

export class SearchPage extends React.Component {
	render() {
		return (
			<div>
				<img className="logo1" src={logo1} />

				<br />
				<div className="row d-flex homeCard">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.searchList.map(elem => {
								return (
									<Cards
										key={elem.ID}
										housePic={elem.acf.image}
										houseTitle={elem.acf.title_of_post}
										houseAddress={elem.acf.address}
										houseZipCode={elem.acf.zip_code}
										houseBed={elem.acf.bedrooms}
										houseBath={elem.acf.bathrooms}
										housePrice={
											elem.acf.description_of_property
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
