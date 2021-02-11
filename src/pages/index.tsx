import React from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import Footer from '@/Components/Layout/Footer';
import Header from '@/Components/Layout/Header';

export default function Index(): JSX.Element {
	return (
		<div className={styles.container}>
			<Head>
				<title>Donate Gifts</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className={styles.main}>Content Body</main>

			<Footer />
		</div>
	);
}
