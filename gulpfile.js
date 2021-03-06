var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pug = require('gulp-pug');

gulp.task('serve', ['sass'], function () {
	browserSync.init({
		server: "./app"
	});
	gulp.watch('scripts/*.js', ['minjs']);
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('viewspug/*.pug', ['views']);
	gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('minjs', function () {
	return gulp.src('scripts/**/*.js')
		.pipe(concat('script.js'))
		.pipe(gulp.dest('scrips'))
		.pipe(rename('script.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.stream());
});

gulp.task('sass', function () {
	return gulp.src('scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

gulp.task('views', function buildHTML(){
	return gulp.src('viewspug/*.pug')
	.pipe(pug({
		pretty: 1
	}))
	.pipe(gulp.dest('app'))
	.pipe(browserSync.stream());
});