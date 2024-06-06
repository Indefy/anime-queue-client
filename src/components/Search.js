import React, { useState } from "react";
import axios from "axios";

function Search({ setAnimeList }) {
	const [query, setQuery] = useState("");

	const handleSearch = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.get(
				`http://localhost:3002/anime?search=${query}`
			);
			setAnimeList(response.data);
		} catch (error) {
			console.error("Error searching anime:", error);
		}
	};

	return (
		<form onSubmit={handleSearch} className="mb-4">
			<input
				type="text"
				placeholder="Search anime"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="p-2 border border-gray-400 rounded"
			/>
			<button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
				Search
			</button>
		</form>
	);
}

export default Search;
