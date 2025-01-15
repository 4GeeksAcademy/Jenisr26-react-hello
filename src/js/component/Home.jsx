import React from "react";//1. Importo React
import rigoImage from "../../img/rigo-baby.jpg";//Include images into your bundle
import Navbar from "./Navbar.jsx";//Componente con export default
import { Footer }from "./Footer.jsx"; //Compoenete con export const
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<Footer/>
		</div>
	);
};

export default Home;
