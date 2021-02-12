import React from 'react';
import Link from 'next/link';

export default function NavBar(): JSX.Element {
	return (
		<div className="flex w-full h-16 bg-color-grey-light">
			<div id="logo" className="w-1/3 flex justify-end">
				<div className="flex items-center">
					<Link href="/">
						<button
							type="button"
							className="transition duration-500 ease-in-out background-transparent px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 text-color-text hover:text-color-text-hover"
						>
							Header image here
						</button>
					</Link>
				</div>
			</div>
			<nav className="flex items-center justify-center w-2/3">
				<ul className="flex">
					<li>
						<Link href="/wishcards">
							<button
								type="button"
								className="transition duration-500 ease-in-out background-transparent px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 text-color-text hover:text-color-text-hover"
							>
								Wish Cards
							</button>
						</Link>
					</li>
					<li>
						<Link href="/mission">
							<button
								type="button"
								className="transition duration-500 ease-in-out background-transparent px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 text-color-text hover:text-color-text-hover"
							>
								Mission
							</button>
						</Link>
					</li>
					<li>
						<Link href="/howto">
							<button
								type="button"
								className="transition duration-500 ease-in-out background-transparent px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 text-color-text hover:text-color-text-hover"
							>
								How To
							</button>
						</Link>
					</li>
					<li>
						<Link href="/community">
							<button
								type="button"
								className="transition duration-500 ease-in-out background-transparent px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 text-color-text hover:text-color-text-hover"
							>
								Community
							</button>
						</Link>
					</li>
					<li>
						<Link href="/users/signup">
							<button
								type="button"
								className="transition duration-500 ease-in-out background-transparent px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 text-color-text hover:text-color-text-hover"
							>
								Sign up
							</button>
						</Link>
					</li>
					<li>
						<Link href="/users/login">
							<button
								type="button"
								className="transition duration-500 ease-in-out background-transparent px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 text-color-text hover:text-color-text-hover"
							>
								Login
							</button>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
