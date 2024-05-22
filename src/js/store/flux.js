const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {
			// Use getActions to call a function within a fuction
		
			loadSomeData: async () => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/pepe');
					const data = await resp.json();
					setStore({agenda: data.contacts})
				} catch (error) {
					console.log(error)
				}
			},
			createContact: async (formData) => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/pepe/contacts', {
						method: 'POST',
						body: JSON.stringify(formData),
						headers: {
							'Content-Type': 'application/json'
						},
					});
					const data = await resp.json();
					setStore({agenda: data.contacts})
					getActions().loadSomeData()
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			}
		
		}
	};
};

export default getState;