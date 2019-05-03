const getState = ({ getStore, setStore }) => {
	return {
		store: {
			nod: "",
			bankLists: [],

			propertyList: [],

			filteredList: [],

			navBarArray: [
				{ label: "Sell", url: "/SellByOwner" },
				{ label: "Buy", url: "/property" },
				{ label: "Rent", url: "/Rent" },
				{ label: "Banks", url: "/bank" },
				{ label: "Help", url: "/Help" },
				{ label: "Login/Sign in", url: "/Login" }
			]
		},
		actions: {
			infopass: data => {
				console.log(data);
				fetch(
					"https://wordpress-projectfinalproject-glaelt16.c9users.io/wp-json/real_state/v2/property/",
					{
						method: "post",
						headers: {
							// Accept: "application/json",
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							typeFilter: data.typeFilter,
							priceFilter: data.priceFilter,
							bdFilter: data.bdFilter
						})
					}
				)
					.then(res => res.json())
					.then(data => {
						let store = getStore();
						console.log(data);
						if (data === undefined || data.length === 0) {
							setStore({ nod: 0 });
						} else {
							store.filteredList = data;

							setStore({ filteredList: store.filteredList });
						}
					})
					.catch(err => console.log(err));
			},

			findProperty: propertyID => {
				let store = getStore();
				if (store.propertyList !== []) {
					let property = store.propertyList.filter((item, index) => {
						let strID = item.ID.toString();
						if (strID == propertyID) {
							return item;
						}
					});
					if (property[0] !== undefined) {
						return property[0];
					}
				}
			}
		}
	};
};

export default getState;
