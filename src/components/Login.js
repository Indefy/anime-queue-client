import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:3002/users/login", {
				email,
				password,
			});
			localStorage.setItem("token", response.data.token);
			setIsAuthenticated(true);
			setMessage("Login successful");
			navigate("/");
		} catch (error) {
			console.error(
				"Error logging in:",
				error.response ? error.response.data : error.message
			);
			setMessage(
				`Error: ${error.response ? error.response.data.message : error.message}`
			);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
			{message && <p>{message}</p>}
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<button type="submit">Login</button>
		</form>
	);
}

export default Login;
