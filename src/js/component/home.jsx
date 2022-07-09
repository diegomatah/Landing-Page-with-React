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
		<div className="" style={{"height":"100vh"}}>
			<Navbar/>
			<div className="container-fluid row m-0 p-0">
			<Jumbotron/>
			<h1 className="text-center mt-2">Las mejores playas</h1>
			<div className="d-flex justify-content-around">
			<Card titulo="Bali" img="https://images.pexels.com/photos/11715778/pexels-photo-11715778.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
			<Card titulo="Miami" img="https://images.pexels.com/photos/3773651/pexels-photo-3773651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
			<Card titulo="Maldivas" img="https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
			<Card titulo="Tailandia" img="https://images.pexels.com/photos/3732494/pexels-photo-3732494.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
			</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
