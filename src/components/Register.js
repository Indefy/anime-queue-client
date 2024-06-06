import React, { useState } from "react";
import axios from "axios";

function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:3002/users/register", // Make sure the port matches the server's port
				{
					username,
					email,
					password,
				}
			);
			setMessage(`User registered: ${response.data.username}`);
		} catch (error) {
			console.error(
				"Error registering user:",
				error.response ? error.response.data : error.message
			);
			setMessage(
				`Error: ${error.response ? error.response.data.message : error.message}`
			);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Register</h2>
			{message && <p>{message}</p>}
			<input
				type="text"
				placeholder="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				required
			/>
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
			<button type="submit">Register</button>
		</form>
	);
}

export default Register;
