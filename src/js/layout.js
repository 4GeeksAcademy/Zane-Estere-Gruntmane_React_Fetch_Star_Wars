import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollHorizontal from "./component/scrollHorizontal";

import { Home } from "./views/home";
import { Information } from "./views/information";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollHorizontal>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/information/:kind/:uid" element={<Information />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollHorizontal>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
