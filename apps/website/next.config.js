/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};
