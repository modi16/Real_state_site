const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//empty Array to store values from the api's
			bankLists: [],
			propertyLists: [],
			//navbar
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
			infopass: e => {
				document
					.getElementById("dataPost")
					.addEventListener("click", postData);

				const postData = event => {
					event.preventDefault();

					let typeFilter = document.getElementById("typeFilter")
						.value;
					let priceFilter = document.getElementById("priceFilter")
						.value;
					let bdFilter = document.getElementById("bdFilter").value;

					//get values from api's

					fetch(
						"https://wordpress-projectfinalproject-glaelt16.c9users.io/wp-json/real_state/v2/property",
						{
							method: "POST",
							headers: new Headers(),
							body: JSON.stringify({
								typeFilter: typeFilter,
								priceFilter: priceFilter,
								bdFilter: bdFilter
							})
						}
					)
						.then(res => res.json())
						.then(data => console.log(data))
						.catch(err => console.log(err));
				};
			}
		}
	};
};

export default getState;
