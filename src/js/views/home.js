import React from "react";
import { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const handleInitialData = async () => {
		await actions.getPeople();
		await actions.getPlanets();
		await actions.getStarships();

	}

	const handleFetchDetails = async () => {
		await actions.getNewPeopleDetails();
	};

	const handleAsyncCalls = async () => {
		await handleInitialData();
		await handleFetchDetails();

	}

	useEffect(() => {
		handleAsyncCalls()
	}, [])

	console.log(store)

	return (
		< div className="text-center mt-5" >
			<h1> Hello Starwars!</h1>
			<div>
				<div> <h2> People:  </h2>
					{store.people.map((person) => {
						<div key={person.uid}>
							<p>{person.name}</p>
							{person.details && person.details.properties && (<p key={person.uid}> Height: {person.details.properties.gender}</p>)}
						</div>
					})}</div>

				<div> <h2>Planets: </h2>
					{store.planets.map((planet) => {
						return <p key={planet.uid}>{planet.name} </p>

					})} </div>
				<div> <h2> Starships: </h2>
					{store.starships.map((starship) => {
						return <p key={starship.uid}>{starship.name}</p>
					})} </div>
			</div>
		</div>
	)
}; 
