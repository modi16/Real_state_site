import React from "react";
import { Context } from "../store/appContext.jsx";
import FilterByPrice from "../component/filterByPrice.jsx";
import logo1 from "../../img/home2.jpg";
import "../../styles/home.css";
import Search from "../component/searchbar.jsx";
import { Cards } from "../component/homecards.jsx";

export class Home extends React.Component {
	render() {
		//just for text the card, change with the database data banks
		// const cardsArray = [
		// 	{
		// 		title: "Card Tittle",
		// 		bodyText:
		// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
		// 		imgLink: ""
		// 	},
		// 	{
		// 		title: "Card Tittle",
		// 		bodyText:
		// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
		// 		imgLink: ""
		// 	},
		// 	{
		// 		title: "Card Tittle",
		// 		bodyText:
		// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
		// 		imgLink: ""
		// 	},
		// 	{
		// 		title: "Card Tittle",
		// 		bodyText:
		// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
		// 		imgLink: ""
		// 	},
		// 	{
		// 		title: "Card Tittle",
		// 		bodyText:
		// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
		// 		imgLink: ""
		// 	},
		// 	{
		// 		title: "Card Tittle",
		// 		bodyText:
		// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
		// 		imgLink: ""
		// 	}
		// ];
		return (
			<div>
				<img className="logo1" src={logo1} />
				<Search />
				<br />
				<div className="row d-flex homeCard">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.propertyLists.map(propertyList => {
								return (
									<Cards
										key={propertyList.ID}
										housePic={propertyList.acf.image}
										houseTitle={
											propertyList.acf.title_of_post
										}
										houseAddress={propertyList.acf.address}
										houseZipCode={propertyList.acf.zip_code}
										houseBed={propertyList.acf.bedrooms}
										houseBath={propertyList.acf.bathrooms}
										housePrice={
											propertyList.acf
												.description_of_property
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
