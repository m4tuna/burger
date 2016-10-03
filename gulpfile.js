'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch("./scss/*.scss", ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

/**
* Compile with gulp-ruby-sass + source maps
*/
gulp.task('sass', function () {

  return sass('./scss', {sourcemap: true})
  .on('error', function (err) {
    console.error('Error!', err.message);
  })
  .pipe(sourcemaps.write('./', {
    includeContent: false,
    sourceRoot: '/app/scss'
  }))
  .pipe(browserSync.stream({match: '**/*.css'}));
});
//
//
// gulp.task('sass', function () {
//   return gulp.src('./scss/**/*.scss')
//     .pipe(sass.sync().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});
