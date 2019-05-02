import React from "react";
import logo1 from "../../img/home2.jpg";
import "../../styles/home.css";
import Search from "../component/searchbar.jsx";
import { Cards } from "../component/homecards.jsx";

export class Home extends React.Component {
	render() {
		//just for text the card, change with the database data banks
		const cardsArray = [
			{
				title: "Card Tittle",
				bodyText:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
				imgLink: ""
			},
			{
				title: "Card Tittle",
				bodyText:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
				imgLink: ""
			},
			{
				title: "Card Tittle",
				bodyText:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
				imgLink: ""
			},
			{
				title: "Card Tittle",
				bodyText:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
				imgLink: ""
			},
			{
				title: "Card Tittle",
				bodyText:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
				imgLink: ""
			},
			{
				title: "Card Tittle",
				bodyText:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
				imgLink: ""
			}
		];
		return (
			<div>
				<img className="logo1" src={logo1} />
				<Search />
				<br />
				<Cards cardsArray={cardsArray} />
			</div>
		);
	}
}