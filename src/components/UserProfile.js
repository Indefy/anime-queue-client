import React, { useState, useEffect } from "react";
import axios from "axios";

function UserProfile() {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const fetchFavorites = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3002/users/favorites"
				);
				setFavorites(response.data);
			} catch (error) {
				console.error("Error fetching favorites:", error);
			}
		};

		fetchFavorites();
	}, []);

	const handleRemoveFavorite = async (animeId) => {
		try {
			await axios.delete(`http://localhost:3002/users/favorites/${animeId}`);
			setFavorites(favorites.filter((fav) => fav._id !== animeId));
		} catch (error) {
			console.error("Error removing favorite:", error);
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center">
			<main className="container mx-auto mt-12">
				<div className="bg-white p-8 rounded-lg shadow">
					<h1 className="text-3xl font-bold mb-4">Your Favorites</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{favorites.map((anime) => (
							<div key={anime._id} className="bg-white p-4 rounded-lg shadow">
								<img
									src={anime.imageUrl}
									alt={anime.title}
									className="w-full h-48 object-cover mb-2"
								/>
								<h3 className="text-lg font-bold">{anime.title}</h3>
								<button
									onClick={() => handleRemoveFavorite(anime._id)}
									className="text-red-500 underline mt-2 inline-block"
								>
									Remove
								</button>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

export default UserProfile;
