import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Header from "./components/header/Header";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
	const user = false;
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Homepage />} />
				{user ? (
					<Route path="/" element={<Homepage />} />
				) : (
					<Route path="/register" element={<Register />} />
				)}
				<Route path="/posts" element={<Homepage />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
