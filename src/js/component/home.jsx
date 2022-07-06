import React from "react";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Footer from "./footer.jsx"
import Card from "./card.jsx"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="row d-flex justify-content-center mt-3">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
