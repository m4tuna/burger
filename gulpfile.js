'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify');
var sassdoc = require('sassdoc');
var input = './scss/*.scss';
var watchinput = './scss/**/*.scss';
var output = './css';
var child = require('child_process');
var fs = require('fs');

// gulp.task('server', function() {
//   var server = child.spawn('node', ['server.js']);
//   var log = fs.createWriteStream('server.log', {flags: 'a'});
//   server.stdout.pipe(log);
//   server.stderr.pipe(log);
// });


var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var sassdocOptions = {
  dest: './sassdoc'
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output))
});

gulp.task('prod', function () {
  return gulp
    .src(input)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output))
    .resume();
});

gulp.task('minify', function() {
  gulp.src('lib/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});



gulp.task('sassdoc', function () {
  return gulp
    .src(input)
    .pipe(sassdoc(sassdocOptions))
    .resume();
});



gulp.task('watch', function() {
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(watchinput, ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['prod', 'minify']);
