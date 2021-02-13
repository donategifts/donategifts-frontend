import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '@/Components/Layout/navItems';

export default function NavBar(): JSX.Element {
	return (
		<div className="flex justify-between">
			<div className="flex w-full lg:mx-28 justify-between mx-6 my-6 sm:mx-10">
				<div id="logo" className="lg:w-1/3 flex justify-center">
					<div className="flex items-center">
						<Link href="/">
							<button
								type="button"
								className="background-transparent px-3 py-1 outline-none focus:outline-none"
							>
								<Image
									src="/assets/img/new-donate-gifts-logo-2.png"
									alt="donate-gifts-logo"
									width="90"
									height="95"
								/>
							</button>
						</Link>
					</div>
				</div>
				<nav className="flex flex-initial lg:self-center justify-center lg:w-2/3">
					<ul className="flex flex-col lg:flex-row lg:items-center">
						{navItems.items.map((item) => (
							<li key={item.text}>
								<Link href={item.link}>
									<button type="button" className={navItems.style}>
										{item.text}
									</button>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
}
