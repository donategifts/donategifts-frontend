/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

export default function Header(): JSX.Element {
	return (
		<div>
			Header
			<div>
				<nav className="">
					<ul className="">
						<li>
							<Link href="/wishcards">
								<a>Wish Cards</a>
							</Link>
						</li>
						<li>
							<Link href="/mission">
								<a>Mission</a>
							</Link>
						</li>
						<li>
							<Link href="/howto">
								<a>How To</a>
							</Link>
						</li>
						<li>
							<Link href="/community">
								<a>Community</a>
							</Link>
						</li>
						<li>
							<Link href="/users/signup">
								<a>Sign up</a>
							</Link>
						</li>
						<li>
							<Link href="/users/login">
								<a>Login</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
