
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	minify = require('gulp-minify-css'),
	plumber = require('gulp-plumber'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync');

// Build Scripts
gulp.task( 'js', function(){
	gulp.src([
			// jquery
			'assets/src/js/libs/jquery.min.js',
			// your-scripts
			'assets/src/js/jquery.begin.js',
			'assets/src/js/jquery.app.js',
			'assets/src/js/jquery.end.js',
		])
		.pipe( plumber() )
		.pipe( concat('jquery.app.js') )
		.pipe( gulp.dest('assets/build/js') )
		.pipe( rename({suffix:'.min'}) )
		.pipe( uglify() )
		.pipe( gulp.dest('assets/build/js') );
		// .pipe( browserSync.reload({stream:true}) );
});

// Build Sass CSS
// temporary hack: 'sourcemap=none':true
// github.com/sindresorhus/gulp-ruby-sass/issues/113#issuecomment-53778451
gulp.task( 'sass', function(){
	gulp.src('assets/src/scss/styles.scss')
		.pipe( plumber() )
		.pipe( sass({trace:true,'sourcemap=none':true}) )
		.pipe( gulp.dest('assets/build/css') )
		.pipe( rename({suffix:'.min'}) )
		.pipe( minify() )
		.pipe( gulp.dest('assets/build/css') );
		// .pipe( browserSync.reload({stream:true}) );
});

// Optimize Images
gulp.task( 'img', function(){
	gulp.src('assets/src/img/*')
		.pipe( plumber() )
		.pipe( imagemin() )
		.pipe( gulp.dest('assets/build/img') );
});

gulp.task('sync', function() {
    browserSync.init( ['assets/build/**/*'], {
        proxy: {
            host: "localhost",
            port: 8888
        }
    });
  //   browserSync({
		// proxy: {
  //           host: "localhost",
  //           port: 8888
  //       }
  //   });
});

// Gulp Watch
gulp.task( 'watch', function(){
	gulp.watch( 'assets/src/js/*.js', ['js'] );
	gulp.watch( 'assets/src/scss/**/*.scss', ['sass'] );
	gulp.watch( 'assets/src/img/*', ['img'] );
});

// keep watch at end of array
gulp.task( 'default', [ 'js', 'sass', 'img', 'sync', 'watch' ] );



