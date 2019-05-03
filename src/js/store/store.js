const getState = ({ getStore, setStore }) => {
	return {
		store: {
			nod: "",
			//empty Array to store values from the api's
			bankLists: [],

			//navbar

			propertyList: [],

			filteredList: [],

			searchList: [],

			navBarArray: [
				{ label: "Home", url: "/" },
				{ label: "Sell", url: "/loginowner" },
				{ label: "Buy", url: "/property" },
				{ label: "Rent", url: "/Rent" },
				{ label: "Banks", url: "/bank" },
				{ label: "Help", url: "/Help" },
				{ label: "Login/Sign in", url: "/login" }
			]
		},

		actions: {
			uploadProperty: data => {
				fetch(
					"https://wordpress-projectfinalproject-glaelt16.c9users.io/wp-json/real_state/v2/property",
					{
						method: "PUT",
						body: JSON.stringify({
							title_of_post: data.listingTitle,
							property_type: data.PropertyType,
							price_of_property: data.PropertyType,
							bedrooms: data.Bedrooms,
							bathrooms: data.Baths,
							pool: data.Pool,
							address: data.address,
							city: data.city,
							zip_code: data.zipCode,
							price_range: data.price
						}),
						headers: {
							//Accept: "application/json",
							"Content-Type": "application/json",
							Authorization:
								"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd29yZHByZXNzLXJleW1hZ28uYzl1c2Vycy5pbyIsImlhdCI6MTU1NDc2NDY1NCwibmJmIjoxNTU0NzY0NjU0LCJleHAiOjE1NTUzNjk0NTQsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.P-KL4uHNKF8IoQq7g55wz38Ptqu24NlLtwL28465IVQ"
						}
					}
				);
			},

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

			//get information from api
			search: data => {
				//console.log(data);
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
			},
			// .then(res => res.json())
			// .then(data => {
			// 	console.log(data);
			// 	let store = getStore();
			// 	store.searchList = data;

			// 	setStore({ searchList: store.searchList });
			// })
			// .catch(err => console.log(err));

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
