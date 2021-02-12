import React from 'react';
import RegisterForm from '@/Components/Authentication/RegisterForm';
import BaseLayout from '@/Components/Layout/BaseLayout';

export default function Signup(): JSX.Element {
	return (
		<BaseLayout>
			<RegisterForm />
		</BaseLayout>
	);
}
