import React from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import "../../styles/information.css";

export const Information = ({ type, ...data }) => {
	const { store } = useContext(Context);
	const { kind, uid } = useParams();


	const entityData = store[kind].find(entity => entity.uid === uid);

	console.log("entityData", entityData)

	return (

		<div className="entityData card text-center ms-5 me-5 " style={{ background: "rgb(154, 139, 139)" }}>

			<div className="text-center">
				<div className="card-header">
					<h2 className="text-warning"> more:
						<img
							className="logo ms-3 "
							id="starwars more"
							src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
							alt="Star Wars Logo"
							style={{ width: '7rem', textAlign: 'center' }}
						/>

					</h2>

				</div>

				<div className="card-body">

					{kind === "people" && (

						<>
							<h5 className="title">{entityData.name}</h5>
							<p>HAIR: {entityData.details.properties.hair_color}</p>
							<p>SKIN: {entityData.details.properties.skin_color}</p>
							<p>EYES: {entityData.details.properties.eye_color}</p>
						</>
					)}

					{kind === "planets" && (
						<>
							<h5 className="title">{entityData.name}</h5>
							<p>Rotation period: {entityData.details.properties.rotation_period}</p>
							<p>Orbital period: {entityData.details.properties.orbital_period}</p>
							<p>Gravity: {entityData.details.properties.gravity}</p>
							<p>Terrain:  {entityData.details.properties.terrain} </p>
							<p>Surface water: {entityData.details.properties.surface_water}</p>
						</>
					)}

					{kind === "starships" && (
						<>
							<h5 className="title">{entityData.name}</h5>
							<p>Class: {entityData.details.properties.starship_class}</p>
							<p>Length: {entityData.details.properties.length}</p>
							<p>Passengers: {entityData.details.properties.passengers}</p>
							<p>Max atmosphering speed: {entityData.details.properties.max_atmosphering_speed} </p>
						</>
					)}
				</div>

			</div>

			<div className="card-footer">


				<img
					className="starwars movie 1 me-4"
					id="starwars movies"
					src="https://lumiere-a.akamaihd.net/v1/images/EP6_POS_21_R-RESIZED_2873dc04.jpeg"
					alt="Star Wars movie"
					style={{ width: '7rem', textAlign: "center" }}
				/>

				<img
					className="starwars movie 2 me-4"
					id="starwars movies"
					src="https://lumiere-a.akamaihd.net/v1/images/p_starwarstheriseofskywalker_18508_3840c966.jpeg"
					alt="Star Wars movie"
					style={{ width: '7rem', textAlign: "center" }}
				/>


				<img
					className="starwars movie 3 me-4"
					id="starwars movies"
					src="https://lumiere-a.akamaihd.net/v1/images/EP4_POS_2_D-RESIZED_f977074a.jpeg"
					alt="Star Wars movie"
					style={{ width: '7rem', textAlign: "center" }}
				/>

				<img
					className="starwars movie 4 me-4"
					id="starwars movies"
					src="https://lumiere-a.akamaihd.net/v1/images/EP1-IA-99993-RESIZED_f9ae99b6.jpeg"
					alt="Star Wars movie"
					style={{ width: '7rem', textAlign: "center" }}
				/>

			</div>

		</div>

	)
};


