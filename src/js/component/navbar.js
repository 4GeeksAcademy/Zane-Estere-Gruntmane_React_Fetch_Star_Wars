import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-bg-secondary-subtle mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-light-emphasis">
					<i className="fa-brands fa-tiktok ms-2 me-2"></i>
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
				style={{ width: "10rem" }}
			/>

			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
