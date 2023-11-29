const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [], 

		},
		actions: {

			getGrid: async () => {
				const store = getStore();
				
				const response = await fetch("https://www.swapi.tech/api/");
				const jsonResponse = await response.json();
				console.log(jsonResponse)
				setStore({ store: jsonResponse });
			},
			
			getPeopleDetails: async () => { 
				const store = getStore();

				const newPeopleWithDetails = await Promise.all (store.people.map (async (people) => { 
				const textresponse = await fetch(people.url);
				const jsonResponse = await textresponse.json();
				
				return { ... people, details: jsonResponse.result }; 

			}))
				setStore({ ...store, people: newPeopleWithDetails  });
			},

			getPlanetsDetails: async () => { 
				const store = getStore();
				
				const newPlanetsWithDetails = await Promise.all (store.planets.map(async (planet) => { 
				const textresponse = await fetch(planet.url);
				const jsonResponse = await textresponse.json();
				
				return { ... planet, details: jsonResponse.result };
			}))
			setStore  ({ ... store, planets: newPlanetsWithDetails}); 
			},


			getStarshipsDetails: async () => { 
				const store = getStore();
				
				const newStarshipWithDetails = await Promise.all (store.starships.map (async (starship) =>{ 

				const textresponse = await fetch (starship.url);
				const jsonResponse = await textresponse.json();
				
				return {... starship, details: jsonResponse.result}; 

			}))
				setStore({ ...store, starships: newStarshipWithDetails });
			},

		}
	}
};
export default getState;
