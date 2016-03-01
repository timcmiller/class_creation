var gulp = require('gulp');
var babel = require('gulp-babel');
var webpack = require('webpack-stream');

gulp.task('static:dev', function() {
  return gulp.src('app/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('build', ['static:dev']);
gulp.task('default', ['build']);
