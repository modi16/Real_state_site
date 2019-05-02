const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//empty Array to store values from the api's
			bankLists: [],

			//navbar

			propertyList: [],

			filteredList: [],

			searchList: [],

			navBarArray: [
				{ label: "Home", url: "/" },
				{ label: "SellByOwner", url: "/loginowner" },
				{ label: "Buyer", url: "/Buyer" },
				{ label: "Rent", url: "/Rent" },
				{ label: "Banks", url: "/bank" },
				{ label: "Help", url: "/Help" },
				{ label: "Login/Sign in", url: "/" }
			]
		},
		actions: {
			infopass: data => {
				//console.log(data);
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
							//search bar
						})
					}
				)
					.then(res => res.json())
					.then(data => {
						let store = getStore();
						store.filteredList = data;

						setStore({ filteredList: store.filteredList });
					})
					.catch(err => console.log(err));
			},

			//get information from api
			search: data => {
				console.log(data);
				fetch(
					"https://wordpress-projectfinalproject-glaelt16.c9users.io/wp-json/real_state/v2/search",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							city: data.searchFilterCity
							//zip_code: data.searchFilterZip
						})
					}
				)
					.then(response => {
						if (response.status !== 200) {
							alert(
								"Connection error, status " + response.status
							);
							return;
						}

						response.json().then(data => {
							//console.log(data);
							let store = getStore();
							store.searchList = data;

							setStore({ searchList: store.searchList });
						});
					})
					.catch(err => {
						alert("Fetch error: ", err);
					});
				// .then(res => res.json())
				// .then(data => {
				// 	console.log(data);
				// 	let store = getStore();
				// 	store.searchList = data;

				// 	setStore({ searchList: store.searchList });
				// })
				// .catch(err => console.log(err));
			}
		}
	};
};

export default getState;
