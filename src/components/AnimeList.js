import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AnimeList() {
	const [animeList, setAnimeList] = useState([]);

	useEffect(() => {
		const fetchAnime = async () => {
			try {
				const response = await axios.get("http://localhost:3002/anime");
				setAnimeList(response.data);
			} catch (error) {
				console.error("Error fetching anime:", error);
			}
		};

		fetchAnime();
	}, []);

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center">
			<main className="container mx-auto mt-12">
				<h1 className="text-4xl font-bold mb-6">Anime List</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{animeList.map((anime) => (
						<div key={anime._id} className="bg-white p-4 rounded-lg shadow">
							<img
								src={anime.imageUrl}
								alt={anime.title}
								className="w-full h-48 object-cover mb-2"
							/>
							<h3 className="text-lg font-bold">{anime.title}</h3>
							<p className="text-sm">
								{anime.description.substring(0, 100)}...
							</p>
							<Link
								to={`/anime/${anime._id}`}
								className="text-blue-500 underline mt-2 inline-block"
							>
								View Details
							</Link>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default AnimeList;
