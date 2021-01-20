import React from 'react';
import { userData } from '../helper/user-data';
import { IUser } from '../types/IUser';

export default function User(props: { users: IUser[] }): JSX.Element {
	let { users } = props;
	if (!users || users.length === 0) {
		users = userData;
	}
	return (
		<div>
			{users.map((user) => (
				<div
					className="bg-color-grey hover:bg-color-grey-light cursor-pointer p-3 m-4 border-color-grey border-2 rounded"
					key={user._id}
				>
					<pre>{`${JSON.stringify(user, undefined, 3)}`}</pre>
				</div>
			))}
		</div>
	);
}

export async function getStaticProps(_context): Promise<any> {
	try {
		const res = await fetch(
			`${process.env.BASE_HOST || 'http://localhost:3010'}/website-api/user/get-users`,
		);
		const data = await res.json();

		if (!data || data.length === 0) {
			return {
				redirect: {
					destination: '/',
					permanent: false,
				},
			};
		}

		return {
			props: {
				users: data,
			},
		};
	} catch {
		return {
			props: {
				users: [],
			},
		};
		// return {
		// 	redirect: {
		// 		destination: '/',
		// 		permanent: false,
		// 	},
		// };
	}
}
