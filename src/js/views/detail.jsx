import React from "react";
import { Context } from "../store/appContext.jsx";

import "../../styles/home.css";
import Filters from "../component/filterByPrice.jsx";

export class Detail extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Filters />
				</div>
			</div>
		);
	}
}
