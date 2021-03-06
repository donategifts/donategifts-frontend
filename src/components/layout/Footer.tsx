/* eslint-disable react/jsx-one-expression-per-line */
import Link from 'next/link';
import React from 'react';

export default function Footer(): JSX.Element {
	const breadCrumbs: {
		link: string;
		text: string;
	}[] = [
		{
			link: '/contact',
			text: 'Contact Us',
		},
		{
			link: '/mission',
			text: 'Mission',
		},
		{
			link: '/howto',
			text: 'How it works',
		},
		{
			link: '/team',
			text: 'Who we are',
		},
		{
			link: '/wishcards',
			text: 'Wish Cards',
		},
		{
			link: '/community',
			text: 'Community',
		},
		{
			link: '/terms',
			text: 'Terms',
		},
		{
			link: '/faq',
			text: 'FAQ',
		},
	];

	return (
		<div className="quick-font w-full bg-primary bg-dark p-6">
			<p className="text-yellow p-2 text-lg flex justify-center">
				<i className="fa fa-heart mt-1" aria-hidden />
				<a
					href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LA5DA2K2C8HLW"
					rel="noreferrer"
					title="support our organization by paypal donation"
					target="_blank"
					className="mr-1 ml-1 hover:underline"
				>
					<span>How To Support Our Cause</span>
				</a>
				<i className="fa fa-heart mt-1" aria-hidden />
			</p>
			<div className="flex flex-wrap justify-center">
				<div className="text-white">
					<button type="button" className="px-2">
						<a
							href="https://www.instagram.com/donategifts/"
							target="_blank"
							rel="noreferrer"
							className="hover:underline"
						>
							<span>Social Media</span>
						</a>
					</button>
					<span>|</span>
				</div>
				{breadCrumbs.map((item, index) => (
					<div className="text-white" key={item.text}>
						<button type="button" className="px-2">
							<Link href={item.link}>
								<span className="hover:underline">{item.text}</span>
							</Link>
						</button>
						{index + 1 !== breadCrumbs.length && <span>|</span>}
					</div>
				))}
			</div>
			<div className="text-white p-2 flex justify-center space-x-1">
				<p>Donate Gifts Inc.</p>
				<p>{new Date().getFullYear()}.</p>
				<p>All rights reserverd</p>
			</div>
		</div>
	);
}
