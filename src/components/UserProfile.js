import React, { useState, useEffect } from "react";
import api from "../axiosSetup";

function UserProfile() {
	const [favorites, setFavorites] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchFavorites = async () => {
			try {
				const response = await api.get("/users/favorites");
				setFavorites(response.data);
			} catch (error) {
				console.error("Error fetching favorites:", error);
				setError(error.response ? error.response.data.message : error.message);
			}
		};

		fetchFavorites();
	}, []);

	const handleRemoveFavorite = async (animeId) => {
		try {
			await api.delete(`/users/favorites/${animeId}`);
			setFavorites(favorites.filter((fav) => fav._id !== animeId));
		} catch (error) {
			console.error("Error removing favorite:", error);
			setError(error.response ? error.response.data.message : error.message);
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center">
			<main className="container mx-auto mt-12">
				<div className="bg-white p-8 rounded-lg shadow">
					<h1 className="text-3xl font-bold mb-4">Your Favorites</h1>
					{error && <p className="text-red-500">{`Error: ${error}`}</p>}
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
