import React from 'react';
import NavBar from '@/Components/Layout/NavBar';
import Footer from '@/Components/Layout/Footer';

export default function BaseLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
}
