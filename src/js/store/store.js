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
			uploadProperty: data => {
				fetch(
					"https://wordpress-projectfinalproject-glaelt16.c9users.io/wp-json/real_state/v2/property/",
					{
						method: "put",
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
							Accept: "application/json",
							"Content-Type": "application/json"
						}
					}
				);
			},
			
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
