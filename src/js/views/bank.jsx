import React from "react";
//import Moment from "react-moment";
import "../../styles/home.css";
import { Context } from "../store/appContext.jsx";
import Banks from "../component/bankListing.jsx";
import Header from "../component/bankHeader.jsx";
//import MeetCard from "../component/meetcard.jsx";
import PropTypes from "prop-types";

export class Bank extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Context.Consumer>
					{({ store, actions }) => {
						return store.bankLists.map(bankList => {
							return (
								<Banks
									key={bankList.ID}
									bankPic={bankList.acf.picture_logo}
									bankName={bankList.acf.bank_name}
									bankRate={bankList.acf.apr_rate}
									bankApply={bankList.acf.apply_here}
								/>
							);
						});
					}}
				</Context.Consumer>
			</div>
		);
	}
}
