import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosSetup"; // Import the axios instance

const AddAnime = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [episodes, setEpisodes] = useState(0);
	const [genres, setGenres] = useState("");
	const [releaseDate, setReleaseDate] = useState("");
	const [rating, setRating] = useState(0);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newAnime = {
			title,
			description,
			imageUrl,
			episodes,
			genres: genres.split(",").map((genre) => genre.trim()),
			releaseDate,
			rating,
		};
		try {
			await axiosInstance.post("/anime", newAnime);
			navigate("/anime");
		} catch (error) {
			console.error("Error adding anime:", error);
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
			<main className="container mx-auto mt-12">
				<h1 className="text-4xl font-bold mb-6">Add New Anime</h1>
				<form
					onSubmit={handleSubmit}
					className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
				>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Title
						</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Description
						</label>
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							required
						></textarea>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Image URL
						</label>
						<input
							type="text"
							value={imageUrl}
							onChange={(e) => setImageUrl(e.target.value)}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Episodes
						</label>
						<input
							type="number"
							value={episodes}
							onChange={(e) => setEpisodes(parseInt(e.target.value))}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Genres (comma-separated)
						</label>
						<input
							type="text"
							value={genres}
							onChange={(e) => setGenres(e.target.value)}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Release Date
						</label>
						<input
							type="date"
							value={releaseDate}
							onChange={(e) => setReleaseDate(e.target.value)}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Rating
						</label>
						<input
							type="number"
							value={rating}
							onChange={(e) => setRating(parseFloat(e.target.value))}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							required
							min="0"
							max="10"
							step="0.1"
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Add Anime
						</button>
					</div>
				</form>
			</main>
		</div>
	);
};

export default AddAnime;
