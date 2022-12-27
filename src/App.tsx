import React from "react";
import "./App.css";
import CardGenerator from "./components/CardGenerator";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Guess that Card!</h1>
			</header>
			<CardGenerator></CardGenerator>
			<footer>
				<p>Developed by Blair</p>
				<a href="https://www.freepik.com/free-vector/neon-purple-lights-background-arrow-style_8152351.htm#query=abstract%20purple&position=2&from_view=search&track=sph">
					Image by starline
				</a>{" "}
				on Freepik
			</footer>
		</div>
	);
}

export default App;
