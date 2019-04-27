const getState = ({ getStore, setStore }) => {
	return {
		store: {
			bankLists: [],

			propertyList: [],

			navBarArray: [
				{ label: "Home", url: "/" },
				{ label: "SellByOwner", url: "/SellByOwner" },
				{ label: "Buyer", url: "/Buyer" },
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
					.then(data => console.log(data))
					.catch(err => console.log(err));
			}
		}
	};
};

export default getState;
