// import React from "react";
// import { Link } from "react-router-dom";

// function Home({ isAuthenticated }) {
// 	return (
// 		<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
// 			<main className="container mx-auto flex flex-col items-center mt-12">
// 				<h1 className="text-4xl font-bold mb-6">Welcome to AniTracker</h1>
// 				<p className="text-lg mb-6">
// 					Track, share, and discover your favorite anime and manga.
// 				</p>
// 				{!isAuthenticated && (
// 					<div className="flex space-x-4">
// 						<Link
// 							to="/login"
// 							className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// 						>
// 							Login
// 						</Link>
// 						<Link
// 							to="/register"
// 							className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
// 						>
// 							Register
// 						</Link>
// 					</div>
// 				)}
// 			</main>
// 		</div>
// 	);
// }

// export default Home;

import React from "react";
import { Link } from "react-router-dom";

function Home({ isAuthenticated }) {
	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
			<main className="container mx-auto flex flex-col items-center mt-12">
				<h1 className="text-4xl font-bold mb-6">Welcome to AniTracker</h1>
				<p className="text-lg mb-6">
					Track, share, and discover your favorite anime and manga.
				</p>
				{!isAuthenticated && (
					<div className="flex space-x-4">
						<Link
							to="/login"
							className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
						>
							Login
						</Link>
						<Link
							to="/register"
							className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
						>
							Register
						</Link>
					</div>
				)}
			</main>
		</div>
	);
}

export default Home;
