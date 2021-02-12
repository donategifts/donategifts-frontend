import React from 'react';
import Head from 'next/Head';
import NavBar from '@/Components/Layout/NavBar';
import Footer from '@/Components/Layout/Footer';

export default function BaseLayout({
	children,
	pageTitle,
}: {
	children: React.ReactNode;
	pageTitle: string;
}): JSX.Element {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap"
					rel="stylesheet"
				/>
				<script src="https://kit.fontawesome.com/7a735561bb.js" crossOrigin="anonymous" />
				<title>{pageTitle}</title>
			</Head>

			<NavBar />
			{children}
			<Footer />
		</>
	);
}
