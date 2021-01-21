/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

function getAPIHost() {
	const env = process.env.NODE_ENV;

	if (env === 'development') {
		console.log('API RUNNING ON: http://localhost:3010/website-api');
		return 'http://localhost:3010/website-api';
	}

	if (env === 'testing') {
		return 'https://dev.donate-gifts.com/website-api';
	}

	return 'https://donate-gifts.com/website-api';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = {
	env: {
		API_ENDPOINT: getAPIHost(),
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};
