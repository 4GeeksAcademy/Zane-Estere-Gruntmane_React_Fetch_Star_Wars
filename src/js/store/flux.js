import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: ("https://www.swapi.tech/api/"),
			favorites: [],

			people: [],
			planets: [],
			starships: [],

		},
		actions: {



			getPeople: async () => {
				console.log("getPeople");
				const store = getStore(); 
				const textResponse = await fetch(store.url + "people");
				const jsonResponse = await textResponse.json();
				setStore({ ...store, people: jsonResponse.results });

			},


			getPlanets: async () => {
				console.log("getPlanet");
				const store = getStore();
				const textResponse = await fetch(store.url + "planets");
				const jsonResponse = await textResponse.json();
				setStore({ ...store, planets: jsonResponse.results });

			},


			getStarships: async () => {
				console.log("getStarships");
				const store = getStore();
				const textResponse = await fetch(store.url + "starships");
				const jsonResponse = await textResponse.json();
				setStore({ ...store, starships: jsonResponse.results });
			},

			getNewPeopleDetails: async () => {
				const store = getStore();
				const newPeopleDetails = await Promise.all(store.people.map(async (person) => {
					const textResponse = await fetch(person.url);
					const jsonResponse = await textResponse.json();
					return { ...person, details: jsonResponse.result };
				}));
				setStore({ ...store, people: newPeopleDetails });
			},


			getNewPlanetsDetails: async () => {
				const store = getStore();
				const newPlanetsDetails = await Promise.all(store.planets.map(async (planet) => {
					const textResponse = await fetch(planet.url);
					const jsonResponse = await textResponse.json();
					return { ...planet, details: jsonResponse.result };
				}));
				setStore({ ...store, planets: newPlanetsDetails });
			},

			getNewStarshipsDetails: async () => {
				const store = getStore();
				const NewStarshipsDetails = await Promise.all(store.starships.map(async (starship) => {
					const textResponse = await fetch(starship.url);
					const jsonResponse = await textResponse.json();
					return { ...starship, details: jsonResponse.result };
				}));
				setStore({ ...store, starships: NewStarshipsDetails });
			},

			delFavorite: (kind) => {
				let aux = getStore().favorites.filter(el => el != kind)
				setStore({ favorites: aux })
			},
			addRemoveFav: (kind) => {
				if (getStore().favorites.length > 0) {
					getStore().favorites.includes(kind) ? getActions().delFavorite(kind)
						: setStore({ favorites: [...getStore().favorites, kind] })
				} else {
					setStore({ favorites: [kind] })
				}
			},

		}

	}
};
export default getState;
