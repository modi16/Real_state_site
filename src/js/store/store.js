const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//	demo: [
			//		{
			//			priceFilter: this.state.priceFilter,
			//			typeFilter: this.state.typeFilter,
			//			bdFilter: this.state.bdFilter
			//		},
			//	]
		},
		actions: {
			/*changeColor: (index, color) => {
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
			}*/
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
