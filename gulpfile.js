/* eslint-disable @typescript-eslint/no-var-requires */
const { parallel, task } = require('gulp');
const del = require('del');

task('cleanModules', () => del(['./node_modules', '**/node_modules'], { force: true, dot: true }));

task('cleanTmp', () => del(['**/tsconfig.tsbuildinfo'], { force: true, dot: true }));

task('cleanCoverage', () => del(['./coverage'], { force: true, dot: true }));

task('cleanNext', () =>
	del(['**/dist'], {
		force: true,
		dot: true,
	}),
);

exports.superclean = parallel('cleanNext', 'cleanTmp', 'cleanModules', 'cleanCoverage');

exports.clean = parallel('cleanNext', 'cleanTmp', 'cleanCoverage');
