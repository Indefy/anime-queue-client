import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function AnimeDetails() {
	const { id } = useParams();
	const [anime, setAnime] = useState(null);

	useEffect(() => {
		const fetchAnime = async () => {
			try {
				const response = await axios.get(`http://localhost:3002/anime/${id}`);
				setAnime(response.data);
			} catch (error) {
				console.error("Error fetching anime:", error);
			}
		};

		fetchAnime();
	}, [id]);

	if (!anime) return <div>Loading...</div>;

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center">
			<header className="w-full bg-gray-900 text-white p-4">
				<div className="container mx-auto flex justify-between items-center">
					<div className="text-2xl font-bold">AniTracker</div>
					<nav>
						<ul className="flex space-x-4">
							<li>
								<Link to="/" className="hover:underline">
									Home
								</Link>
							</li>
							<li>
								<Link to="/anime" className="hover:underline">
									Anime List
								</Link>
							</li>
							<li>
								<Link to="/profile" className="hover:underline">
									Profile
								</Link>
							</li>
							<li>
								<Link to="/logout" className="hover:underline">
									Logout
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<main className="container mx-auto mt-12">
				<div className="bg-white p-8 rounded-lg shadow">
					<img
						src={anime.imageUrl}
						alt={anime.title}
						className="w-full h-64 object-cover mb-4"
					/>
					<h1 className="text-3xl font-bold mb-4">{anime.title}</h1>
					<p className="mb-4">{anime.description}</p>
					<p className="mb-4">Episodes: {anime.episodes}</p>
					<p className="mb-4">Genres: {anime.genres.join(", ")}</p>
					<p className="mb-4">Rating: {anime.rating}</p>
				</div>
			</main>
		</div>
	);
}

export default AnimeDetails;
