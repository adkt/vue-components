
var source = 'source/entry.js';
var dest = 'public/';
var refreshFile = './zrefresh.txt';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var vueify = require('vueify');
var del = require('del');

gulp.task('join', () => {
  return gulp.src(source)
    .pipe(browserify({transform: [[{_flags: {debug: true}}, vueify]]}))
    .pipe(gulp.dest(dest))
});

/*
gulp.task('styles', () => {
    return gulp.src(mySource)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/'));
});
*/
gulp.task('clean', () => {
    return del([
        'public/entry.js',
    ]);
});

gulp.task('watch', () => {
    gulp.watch(refreshFile, (done) => {
        gulp.series(['clean','join'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'join']));
