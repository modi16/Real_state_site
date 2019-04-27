import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			// this function is the equivalent to "window.onLoad"
			// it only run once on the entire application lifetime
			// you should do your ajax requests here

			//This to get the data or send data to wordpress endpoint.

			fetch(
				"https://wordpress-projectfinalproject-glaelt16.c9users.io/wp-json/real_state/v2/banks"
			)
				.then(response => {
					if (response.status !== 200) {
						alert("Connection error, status " + response.status);
						return;
					}

					response.json().then(data => {
						let store = this.state.store;
						store.bankLists = data;
						this.setState({ store });
					});
				})
				.catch(err => {
					alert("Fetch error: ", err);
				});

			fetch(
				"https://wordpress-projectfinalproject-glaelt16.c9users.io/wp-json/real_state/v2/property"
			)
				.then(response => {
					if (response.status !== 200) {
						alert("Connection error, status " + response.status);
						return;
					}

					response.json().then(data => {
						let store = this.state.store;
						store.propertyList = data;
						this.setState({ store });
					});
				})
				.catch(err => {
					alert("Fetch error: ", err);
				});

			/*	fetch("https://assets.breatheco.de/apis/fake/meetup/events")
				.then(response => {
					if (response.status !== 200) {
						alert("Connection error, status " + response.status);
						return;
					}

					response.json().then(data => {
						//	console.log(
						//		data.posts[1].attachments[2].images.thumbnail.url
						//	);
						let store = this.state.store;
						store.events = data;
						this.setState({ store });
					});
				})
				.catch(err => {
					alert("Fetch error: ", err);
				});*/
		}

		render() {
			let store = this.state.store;
			store;
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
