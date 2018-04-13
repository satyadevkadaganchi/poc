var gulp = require('gulp')
    , nodemon = require('gulp-nodemon')
// , jshint = require('gulp-jshint');

var connect = require('gulp-connect');
var open = require('gulp-open');
var bower = require('gulp-bower');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var os = require('os');

gulp.task('bower', function() {
    return bower();
});



gulp.task('open', function(){
    gulp.src('index.html')
        .pipe(open({uri: 'http://localhost:5000/'}));
});




gulp.task('webserver', function() {
    connect.server({
        port: 5000,
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch('*.html', ['html']);

});


gulp.task('default', ['bower', 'open',"webserver", "watch"]);