import React from "react";
import { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import MyButton from "../component/myButton";

export const Home = (people, planets, starships) => {
	const { store, actions } = useContext(Context);

	const handleInitialData = async () => {
		await actions.getPeople();
		await actions.getPlanets();
		await actions.getStarships();

	}

	const handleFetchDetails = async () => {
		actions.getNewPeopleDetails();
		actions.getNewPlanetsDetails();
		actions.getNewStarshipsDetails();
	};

	const handleAsyncCalls = async () => {
		await handleInitialData();
		await handleFetchDetails();

	}

	useEffect(() => {
		handleAsyncCalls()
	}, [])


	return (
		< div className="text-center mt-5" >
			<h1> All of your Star Wars.. </h1>

			<div className="text-start ms-4 me-4 mb-3">

				<h2 className="text-uppercase"> People: </h2>
				<div className="row">
					{store.people.map((person) => (
						<div className="col-sm-4 mb-3 mb-sm-0">
							<div className="card">
								<div className="card-body">
									<div key={person.uid}>
										<h6 className="text-uppercase">{person.name}</h6>
										<div className="fs-6 fw-light">
											{person.details && person.details.properties && (
												<div className="infoWrap">
													<p key={person.uid}> Height: {person.details.properties.height}</p>
													<p key={person.uid}> Mass: {person.details.properties.mass}</p>
													<p key={person.uid}> Birth year: {person.details.properties.birth_year}</p>
												</div>
											)}
										</div>

										<div>
											<MyButton />
										</div>

									</div>
								</div>
							</div>
						</div>
					))}

				</div>
			</div>



			<div className="text-start ms-4 me-4 mb-3">
				<h2 className="text-uppercase">Planets: </h2>
				<div className="row">
					{store.planets.map((planet) => (
						<div className="col-sm-4 mb-3 mb-sm-0">
							<div className="card">
								<div className="card-body">
									<div key={planet.uid}>
										<h6 className="text-uppercase">{planet.name}</h6>
										{planet.details && planet.details.properties && (
											<div className="infoWrap">
												<p className="fs-6 fw-light"> Diameter: {planet.details.properties.diameter}</p>
												<p className="fs-6 fw-light"> Climate: {planet.details.properties.climate}</p>
												<p className="fs-6 fw-light"> Population: {planet.details.properties.population}</p>
											</div>
										)}
									</div>
									<div>
										<MyButton />
									</div>
								</div>
							</div>
						</div>
					))}

				</div>
			</div >

			<div className="text-start ms-4 me-4 mb-3">
				<h2 className="text-uppercase"> Starships: </h2>
				<div className="row">
					{store.starships.map((starship) => (
						<div className="col-sm-4 mb-3 mb-sm-0">
							<div className="card">
								<div className="card-body">
									<div key={starship.uid}>
										<h6 className="text-uppercase">{starship.name}</h6>
										{starship.details && starship.details.properties && (
											<div className="infoWrap">
												<p className="fs-6 fw-light"> Model: {starship.details.properties.model}</p>
												<p className="fs-6 fw-light"> Crew: {starship.details.properties.crew}</p>
												<p className="fs-6 fw-light"> Class: {starship.details.properties.starship_class}</p>
											</div>
										)}
									</div>

									<div>
										<MyButton />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

			</div >
		</ div >

	)
}; 
