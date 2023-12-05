import React from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import "../../styles/information.css";

export const Information = ({ type, ...data }) => {
	const { store } = useContext(Context);
	const { kind, uid } = useParams();


	const entityData = store[kind].find(entity => entity.uid === uid);

	console.log("entityData", entityData);

	return (

		<div className="entityData card text-center ms-5 me-5 " style={{ background: "rgb(154, 139, 139)" }}>

			<div className="text-center">
				<div className="card-header">
					<p> Learn More about the Star Wars </p>
				</div>

				<div className="card-body">
					<h5 className="title">{entityData.name}</h5>
					{kind === "people" && (
						<>

							<p>{entityData.details.properties.hair_color}</p>
							<p>{entityData.details.properties.skin_color}</p>
							<p>{entityData.details.properties.eye_color}</p>
						</>
					)};

					{kind === "planets" && (
						<>

							<p>{entityData.details.properties.rotation_period}</p>
							<p>{entityData.details.properties.orbital_period}</p>
							<p>{entityData.details.properties.gravity}</p>
							<p>{entityData.details.properties.terrain} </p>
							<p>{entityData.details.properties.surface_water}</p>
						</>
					)}

					{kind === "starships" && (
						<>

							<p>{entityData.details.properties.starship_class}</p>
							<p>{entityData.details.properties.length}</p>
							<p>{entityData.details.properties.passengers}</p>
							<p>{entityData.details.properties.max_atmosphering_speed} </p>
						</>
					)}
				</div>

			</div>

			<div className="card-footer">
				star wars crew
			</div>

		</div>

	)
};


