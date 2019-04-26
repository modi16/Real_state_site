const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
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

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
