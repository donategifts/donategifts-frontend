import React from 'react';
import Head from 'next/head';
import Footer from '@/Components/Layout/Footer';
import NavBar from '@/Components/Layout/NavBar';

export default function Index(): JSX.Element {
	return (
		<>
			<Head>
				<title>Donate Gifts</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar />
			<div className="bg-color-grey flex w-full justify-center">
				<span>Content Body</span>
			</div>

			<Footer />
		</>
	);
}
