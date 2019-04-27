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
							return store.propertyList.map(elem => {
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
