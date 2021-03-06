const gulp = require('gulp');
const pump = require('pump');
const sass = require('gulp-sass');

gulp.task('build', done => {
    pump([
        gulp.src('src/simple.scss'),
        sass({
            outputStyle: 'expanded',
            includePaths: [
				'./node_modules'
            ]
        }),
        gulp.dest('dist/')
    ], done);
});

gulp.task('watch', () => {
    gulp.watch(['src/**'], ['build']);
})