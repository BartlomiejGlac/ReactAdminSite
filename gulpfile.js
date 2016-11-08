var gulp = require("gulp");
var connect = require("gulp-connect");
var open = require("gulp-open");
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');

//Starts Local development server
var config = {
    port: 9000,
    baseURL: "http://localhost",
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        img: './src/images/*',
        css: ['./node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/bootstrap/dist/css/bootstrap-theme.min.css'],
        dist: './dist',
        mainJs: './src/main.js'
    }
};

gulp.task('connect', function () {
    connect.server({
            root: ['dist'],
            port: config.port,
            base: config.baseURL,
            livereload: true
        }
    )
});

gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({uri: config.baseURL + ':' + config.port + '/'}));
});

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('img', function () {
    gulp.src(config.paths.img)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());
});

gulp.task('js', function () {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('eslint', function () {
    return gulp.src(config.paths.js)
        .pipe(eslint({
            config: 'eslint.config.json'
        }))
        .pipe(eslint.format());
});

gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'eslint']);
});

gulp.task('default', ['html', 'css', 'js','img','eslint', 'open', 'watch']);