import React from "react";
import { Link, useNavigate } from "react-router-dom";

function AnimeNavbar({ isAuthenticated }) {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/");
		window.location.reload();
	};

	return (
		<nav className="bg-blue-800 text-white px-6 py-4">
			<div className="flex justify-between items-center">
				<div className="text-xl font-bold">AniTracker</div>
				<ul className="flex space-x-4">
					<li>
						<Link to="/" className="hover:text-gray-300">
							Home
						</Link>
					</li>
					<li>
						<Link to="/anime" className="hover:text-gray-300">
							Anime List
						</Link>
					</li>
					{isAuthenticated && (
						<>
							<li>
								<Link to="/profile" className="hover:text-gray-300">
									Profile
								</Link>
							</li>
							<li>
								<Link to="/add-anime" className="hover:text-gray-300">
									Add Anime
								</Link>
							</li>
							<li>
								<button onClick={handleLogout} className="hover:text-gray-300">
									Logout
								</button>
							</li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
}

export default AnimeNavbar;
