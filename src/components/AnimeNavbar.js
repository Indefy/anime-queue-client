import React from "react";
import { Link } from "react-router-dom";

function AnimeNavbar({ isAuthenticated }) {
	return (
		<header className="w-full bg-gray-900 text-white p-4 fixed top-0">
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
						{isAuthenticated ? (
							<>
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
							</>
						) : (
							<>
								<li>
									<Link to="/login" className="hover:underline">
										Login
									</Link>
								</li>
								<li>
									<Link to="/register" className="hover:underline">
										Register
									</Link>
								</li>
							</>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default AnimeNavbar;
