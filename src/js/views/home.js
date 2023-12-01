import React from "react";
import { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPeople();
		actions.getPlanets();
		actions.getStarships();
	}, [])

	console.log(store)
	return (
		< div className="text-center mt-5" >
			<h1> Hello Starwars!</h1>
			<div>
				<div> <h2> People:  </h2>
					{store.people.map((person) => {
						return <p key={person.uid}>{person.name}</p>
						birth_year
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
