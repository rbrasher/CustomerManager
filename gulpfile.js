/**
 * Created by Ron on 2/20/2015.
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    templateCache = require('gulp-angular-templatecache'),
    dist = 'Scripts/dist';

gulp.task('compressScripts', function () {
    gulp.src([
        'app/**/*.js'
    ])
        .pipe(plumber())
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist));
});

gulp.task('templates', function () {
    gulp.src('app/customersApp/views/**/*.html')
        .pipe(plumber())
        .pipe(templateCache({ root: 'app/customersApp/views', module: 'customersApp' }))
        .pipe(gulp.dest(dist));
});

gulp.task('watch', function () {

    //gulp.watch('Content/*.scss', ['sass']);

    gulp.watch(['app/**/*.js'],
        ['compressScripts']);

});

gulp.task('default', ['compressScripts', 'templates', 'watch']);