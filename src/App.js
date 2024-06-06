import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import AnimeList from "./components/AnimeList";
import AnimeDetails from "./components/AnimeDetails";
import UserProfile from "./components/UserProfile";
import AnimeNavbar from "./components/AnimeNavbar";
import AddAnime from "./components/AddAnime";
import axios from "axios";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			setIsAuthenticated(true);
		}
	}, []);

	return (
		<Router>
			<div className="App">
				<AnimeNavbar isAuthenticated={isAuthenticated} />
				<div className="pt-20">
					<Routes>
						<Route
							path="/"
							element={<Home isAuthenticated={isAuthenticated} />}
						/>
						<Route path="/register" element={<Register />} />
						<Route
							path="/login"
							element={<Login setIsAuthenticated={setIsAuthenticated} />}
						/>
						<Route path="/anime" element={<AnimeList />} />
						<Route path="/anime/:id" element={<AnimeDetails />} />
						<Route path="/profile" element={<UserProfile />} />
						<Route path="/add-anime" element={<AddAnime />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
