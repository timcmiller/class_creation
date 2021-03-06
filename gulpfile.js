var gulp = require('gulp');
var webpack = require('webpack-stream');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');
var gulpWatch = require('gulp-watch');

gulp.task('static:dev', function() {
  return gulp.src('app/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('sass:dev', function() {
  return gulp.src('./app/css/**.scss')
  .pipe(maps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('build/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch(['./app/css/**/*.scss', './app/index.html'], ['sass:dev', 'static:dev']);
});

gulp.task('fonts:dev', function() {
  return gulp.src('./app/css/icons/fonts/**')
  .pipe(gulp.dest('build/css/fonts'));
});

gulp.task('webpack:dev', function() {
  return gulp.src('app/js/entry.jsx')
  .pipe(webpack({
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015', 'stage-2']
          }
        }
      ]
    },
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('build/'));
});

gulp.task('build', ['static:dev', 'webpack:dev']);
gulp.task('styles', ['sass:dev', 'fonts:dev']);
gulp.task('default', ['build', 'styles']);
