import React from "react";
import { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = (people, planets, starships) => {
	const { store, actions } = useContext(Context);
	const [isLoading, setIsLoading] = useState(false);
	const [isFavorite, setFavorite] = useState(false);

	const handleInitialData = async () => {
		console.log("handleInitialData");
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
		console.log("handleAsyncCalls");
		setIsLoading(true);
		await handleInitialData();
		await handleFetchDetails();
		setIsLoading(false);

	}

	useEffect(() => {
		handleAsyncCalls();
	}, [])


	return isLoading ?
		(
			<p> Star Wars is landing... be patient </p>
		) : (
			< div className="text-center mt-5" >
				<h1> All of your Star Wars.. </h1>

				<div className="text-start ms-4 me-4 mb-3">

					<h2 className="text-uppercase"> People: </h2>
					<div className="d-flex overflow-auto">
						{store.people.map((person) => (
							<div className="col-sm-4 mb-3 mb-sm-0 ms-2">
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

												<div className="button-wrapper d-flex justify-content-between">
													<Link to={`/information/people/${person.uid}`}>

														<div className="moreButton">
															<a href="#" className="btn btn-sm btn-outline-secondary">Learn more</a>
														</div>
													</Link>
													<div className="favoritesButton">
														<a href="#" className="btn btn-sm btn-outline-secondary">
															<i
																className={`fa-star ${isFavorite ? 'fa-solid' : 'fa-regular'} my-button`}
																style={{ color: isFavorite ? '#00ff00' : '#ffea00' }}
																onClick={() => actions.addRemoveFav(person)}
															></i>
														</a>
													</div>
												</div>



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
					<div className="d-flex overflow-auto">
						{store.planets.map((planet) => (
							<div className="col-sm-4 mb-3 mb-sm-0 ms-2">
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

											<div className="button-wrapper d-flex justify-content-between">
												<Link to={`/information/planets/${planet.uid}`}>

													<div className="moreButton">
														<a href="#" className="btn btn-sm btn-outline-secondary">Learn more</a>
													</div>
												</Link>
												<div className="favoritesButton">
													<a href="#" className="btn btn-sm btn-outline-secondary">
														<i
															className={`fa-star ${isFavorite ? 'fa-solid' : 'fa-regular'} my-button`}
															style={{ color: isFavorite ? '#00ff00' : '#ffea00' }}
															onClick={() => actions.addRemoveFav(planet)}
														></i>
													</a>
												</div>
											</div>


										</div>
									</div>
								</div>
							</div>
						))}

					</div>
				</div >

				<div className="text-start ms-4 me-4 mb-3">
					<h2 className="text-uppercase"> Starships: </h2>
					<div className="d-flex overflow-auto">
						{store.starships.map((starship) => (
							<div className="col-sm-4 mb-3 mb-sm-0 ms-2">
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

											<div className="button-wrapper d-flex justify-content-between">
												<Link to={`/information/starships/${starship.uid}`}>

													<div className="moreButton">
														<a href="#" className="btn btn-sm btn-outline-secondary">Learn more</a>
													</div>
												</Link>
												<div className="favoritesButton">
													<a href="#" className="btn btn-sm btn-outline-secondary">
														<i
															className={`fa-star ${isFavorite ? 'fa-solid' : 'fa-regular'} my-button`}
															style={{ color: isFavorite ? '#00ff00' : '#ffea00' }}
															onClick={() => actions.addRemoveFav(starship)}
														></i>

													</a>
												</div>
											</div>



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
