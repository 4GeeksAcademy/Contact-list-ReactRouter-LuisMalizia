const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listContact: [],
		},
		actions: {
			createAgenda: async () => {
				const requestOptions = {
					method: "POST",
					redirect: "follow"
				};

				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/maliziam", requestOptions);
					const result = await response.json();
					console.log(result)
				} catch (error) {
					console.error(error);
				}
			},

			getAllContacts: async () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/maliziam/contacts", requestOptions);
					const result = await response.json();
					setStore({ listContact: result.contacts })
				} catch (error) {
					console.error(error);
				}
			},
			createContact: async (inputValue) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					"name": `${inputValue.name}`,
					"phone": `${inputValue.phone}`,
					"email": `${inputValue.email}`,
					"address": `${inputValue.address}`
				});

				const requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/maliziam/contacts", requestOptions);
					if (response.status == 201) {
						setStore({ hiddenMessage: "" })
					} else {
						setStore({ hiddenMessage: "hidden" })
					}
				} catch (error) {
					console.error(error);
				};
			},
			deleteContact: async (id) => {
				const requestOptions = {
					method: "DELETE",
					redirect: "follow"
				};
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/maliziam/contacts/${id}`, requestOptions)
					if (response.status == 204) {
						setStore({deleteStatus: true})
					}

				} catch (error) {
					console.error(error);
				};
			},
		}
	};
};

export default getState;
