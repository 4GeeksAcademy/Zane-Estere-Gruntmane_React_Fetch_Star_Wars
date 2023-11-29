import React from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)
	useEffect(() => {
		actions.getGrid()
	}, [])


	return (
		< div className="text-center mt-5" >
			<h1> Hello Starwars!</h1>
			<div>
				<h2> Proeple:</h2>
			</div>
		</div>
	)
}; 
