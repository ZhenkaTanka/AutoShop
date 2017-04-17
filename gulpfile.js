var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('less', function(){
   gulp.src('app/less/style.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
   }))
});

gulp.task('browserSync', function() {
    browserSync({
        server: { baseDir: "app"},
        port: 3000,
        open: true,
        notify: false
    });
});

gulp.task('default', ['browserSync', 'less'], function(){
    gulp.watch('app/less/**/*.less', ['less']);
    gulp.watch('app/*.html', browserSync.reload);
});
