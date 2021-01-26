const { parallel, task } = require('gulp');
const del = require('del');

task('cleanModules', () => del(['node_modules', '**/node_modules'], { force: true, dot: true }));

task('cleanTmp', () => del(['tsconfig.tsbuildinfo'], { force: true, dot: true }));

task('cleanNext', () =>
  del(['.next'], {
    force: true,
    dot: true,
  }),
);

exports.superclean = parallel('cleanNext', 'cleanTmp', 'cleanModules');

exports.clean = parallel('cleanNext', 'cleanTmp');
