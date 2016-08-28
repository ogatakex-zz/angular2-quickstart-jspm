import gulp from 'gulp';
import webserver from 'gulp-webserver';

gulp.task('webserver', () => {
	gulp.src('src')
		.pipe(webserver({
			livereload: {
				enable: true
			},
			open: true
		}));
});
