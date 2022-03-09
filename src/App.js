import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Header from "./components/header/Header";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";

function App() {
	const user = false;
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={user ? <Homepage /> : <Register />} />
				<Route path="/posts" element={<Homepage />} />
				<Route
					path="/login"
					element={user ? <Homepage /> : <Login />}
				/>
				<Route path="/post:id" element={<Single />} />
			</Routes>
		</Router>
	);
}

export default App;
