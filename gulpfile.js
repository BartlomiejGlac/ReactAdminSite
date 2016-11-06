var gulp = require("gulp");
var connect = require("gulp-connect");
var open = require("gulp-open");

//Starts Local development server
var config = {
    port: 9000,
    baseURL: "http://localhost",
    paths:{
        html: './src/*.html',
        dist: './dist'
    }
};

gulp.task('connect', function(){
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.baseURL,
        livereload: true
        }
    )
});

gulp.task('open',['connect'],function(){
    gulp.src('dist/index.html')
        .pipe(open({uri: config.baseURL + ':' + config.port + '/'}));
});

gulp.task('html', function(){
   gulp.src(config.paths.html)
       .pipe(gulp.dest(config.paths.dist))
       .pipe(connect.reload());
});

gulp.task('watch', function(){
gulp.watch(config.paths.html, ['html']);
});

gulp.task('default', [ 'html', 'open', 'watch' ]);