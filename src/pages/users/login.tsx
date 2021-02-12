import React from 'react';
import LoginForm from '@/Components/Authentication/LoginForm';
import NavBar from '@/Components/Layout/NavBar';

export default function Login(): JSX.Element {
	return (
		<>
			<NavBar />
			<LoginForm />
		</>
	);
}
