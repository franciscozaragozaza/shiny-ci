var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('default', function(){
	console.log('Hola mundo!!');
});

gulp.task('sass', function(){
	return gulp.src('scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));	
});

gulp.task('watch', function(){
	gulp.watch('scss/**/*.scss', ['sass']);
})