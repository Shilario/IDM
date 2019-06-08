const { src, dest } = require('gulp');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify-es').default;
const cleanDest = require('gulp-clean-dest');
const cleanCSS = require('gulp-clean-css');
var gulp = require('gulp');

gulp.task('scripts', function() {
  return gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
});
gulp.task('pages', function() {
  return gulp.src(['./index.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'));
});
gulp.task('styles',function(){
  return gulp.src('./css/*.css')
		.pipe(cleanCSS())	
		.pipe(gulp.dest('./dist/css'))
});
gulp.task('moveSiteMap',function(){
  return gulp.src('sitemap.xml')
    .pipe(gulp.dest('./dist'))
});
gulp.task('moveRobots',function(){
  return gulp.src('robots.txt')
    .pipe(gulp.dest('./dist'))
});
gulp.task('clean',function(cb){
	cleanDest('dist');	
return	cb();
});
gulp.task('default',['clean'],function(){
   runSequence('pages','moveSiteMap','moveRobots', 'scripts', 'styles');
});
