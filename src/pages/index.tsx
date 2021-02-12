import React from 'react';
import Head from 'next/head';
import BaseLayout from '@/Components/Layout/BaseLayout';

export default function Index(): JSX.Element {
	return (
		<>
			<Head>
				<title>Donate Gifts</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap"
					rel="stylesheet"
				/>
				<script src="https://kit.fontawesome.com/7a735561bb.js" crossOrigin="anonymous" />
			</Head>

			<BaseLayout>
				<div className="flex w-full justify-center">
					<div id="home-bg" className="w-full" />
				</div>
			</BaseLayout>
		</>
	);
}
