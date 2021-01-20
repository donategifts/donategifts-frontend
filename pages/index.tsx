import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import NavBar from '../components/common/NavBar/NavBar';

export default function Index(): JSX.Element {
	return (
		<div className={styles.container}>
			<Head>
				<title>I will fix this later</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
		</div>
	);
}
