import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: ("https://www.swapi.tech/api/"),

			people: [],
			planets: [],
			starships: [],

		},
		actions: {



			getPeople: async () => {
				const store = getStore();
				const textresponse = await fetch(store.url + "people");
				const jsonResponse = await textresponse.json();
				setStore({ ...store, people: jsonResponse.results });
			},

			getPlanets: async () => {
				const store = getStore();
				const textresponse = await fetch(store.url + "planets");
				const jsonResponse = await textresponse.json();
				setStore({ ...store, planets: jsonResponse.results });
			},


			getStarships: async () => {
				const store = getStore();
				const textresponse = await fetch(store.url + "starships");
				const jsonResponse = await textresponse.json();
				setStore({ ...store, starships: jsonResponse.results });
			},

			getNewPeopleDetails: async () => {
				const store = getStore();
				const peopleDetails = store.people.map(async (person) => {
					const textresponse = await fetch(store.url + "people" + "person.url");
					const jsonResponse = await textresponse.json();
					return { ...person, details: jsonResponse.results };
				})
				setStore({ ...store, person: newPeopleDetails });
			},
		}

	}
};
export default getState;
