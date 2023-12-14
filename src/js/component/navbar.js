import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const handleDeleteFav = entityData => {
		actions.delFavorite(entityData)
	};

	return (
		<nav className="navbar mb-3" style={{ backgroundColor: 'rgb(0, 0, 0)', color: 'rgb (245, 245, 245)' }}>
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-light-emphasis ms-4">
					<i className="fa-brands fa-tiktok ms-2 me-2" ></i>
					<i className="fa-brands fa-instagram  me-2"></i>
					<i className="fa-brands fa-x-twitter me-2"></i>
					<i className="fa-brands fa-square-youtube me-2"></i>
				</span>
			</Link>

			<img
				className="logo"
				id="local-nav-logo-desktop"
				src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
				alt="Star Wars Logo"
				style={{ width: "10rem", textAlign: 'center' }}
			/>


			<div className="ml-auto">

				<button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					<i className="fa-regular fa-star me-4 ms-1" style={{ color: "#f5f5f5" }} > </i> {store.favorites.length}
					{store.favorites.length > 0 ? store.favorites.map((el, i) => <li key={el.uid}>{el.name} <span onClick={() => handleDeleteFav(el)}>  </span></li>) : ""}
				</button>
				<i className="fa-solid fa-magnifying-glass me-4" style={{ color: "#f5f5f5" }} ></i>
				<Link to="/">
					<i className="fa-solid fa-right-to-bracket  me-4" style={{ color: "#f5f5f5" }} ></i>
				</Link>
			</div>
		</nav >
	)
};
