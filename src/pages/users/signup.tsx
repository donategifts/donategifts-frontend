import React from 'react';
import RegisterForm from '@/Components/Authentication/RegisterForm';
import NavBar from '@/Components/Layout/NavBar';

export default function Signup(): JSX.Element {
	return (
		<>
			<NavBar />
			<RegisterForm />
		</>
	);
}
