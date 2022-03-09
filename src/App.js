import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Header from "./components/header/Header";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</Router>
	);
}

export default App;
