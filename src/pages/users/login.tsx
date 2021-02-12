import React from 'react';
import LoginForm from '@/Components/Authentication/LoginForm';
import BaseLayout from '@/Components/Layout/BaseLayout';

export default function Login(): JSX.Element {
	return (
		<BaseLayout pageTitle="Login">
			<LoginForm />
		</BaseLayout>
	);
}
