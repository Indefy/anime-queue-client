import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosSetup"; // Import the axios instance

function Login({ setIsAuthenticated }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axiosInstance.post("/users/login", {
				email,
				password,
			});
			localStorage.setItem("token", response.data.token); // Store the token
			setIsAuthenticated(true);
			navigate("/");
		} catch (error) {
			console.error("Error logging in:", error);
			setError(
				`Error: ${error.response ? error.response.data.message : error.message}`
			);
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
			<form
				onSubmit={handleSubmit}
				className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
			>
				<h2 className="text-2xl font-bold mb-6">Login</h2>
				{error && <p className="text-red-500 mb-4">{error}</p>}
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Email
					</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Password
					</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Login
				</button>
			</form>
		</div>
	);
}

export default Login;
