import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { userData } from '../../helper/user-data';
import { IUser } from '../../types/IUser';

export default function Index(props: { user: IUser[] }): JSX.Element {
	let { user } = props;
	if (!user || user.length === 0) {
		user = userData;
	}
	return (
		<div>
			{user.map((item) => (
				<div
					className="bg-color-grey hover:bg-color-grey-light cursor-pointer p-3 m-4 border-color-grey border-2 rounded"
					key={item._id}
				>
					<pre>{`${JSON.stringify(item, undefined, 3)}`}</pre>
				</div>
			))}
		</div>
	);
}

export const getStaticProps: GetStaticProps = async (_context) => {
	try {
		const data: IUser[] = await axios({
			method: 'GET',
			url: `${process.env.API_ENDPOINT}/user/get-users`,
		}).then((res) => res.data);

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
				user: data,
			},
		};
	} catch {
		return {
			props: {
				user: [],
			},
		};
	}
};
