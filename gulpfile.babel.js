import gulp from 'gulp';
import jspm from 'gulp-jspm';
import useref from 'gulp-useref';
import webserver from 'gulp-webserver';

gulp.task('jspm', () => {
	gulp.src(paths.app + 'main.js')
		.pipe(jspm({
			selfExecutingBundle: true
		}))
		.pipe(gulp.dest(paths.dest + 'static/app'));
});

gulp.task('webserver', () => {
	gulp.src('src')
		.pipe(webserver({
			livereload: {
				enable: true,
				filter: (filename) => {
					return !(filename.match(/.scss$/));
				}
			},
			open: true
		}));
});

gulp.task('build', ['jspm']);