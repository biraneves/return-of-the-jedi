const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');

// CSS
function stylesDev() {
    return gulp.src('./src/assets/styles/*.scss').pipe(sass()).pipe(gulp.dest('./dev/assets/styles'));
}

function stylesDist() {
    return gulp
        .src('./src/assets/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/assets/styles'));
}

// Images
function imagesDev() {
    return gulp.src('./src/assets/images/**/*').pipe(gulp.dest('./dev/assets/images'));
}

function imagesDist() {
    return gulp.src('./src/assets/images/**/*').pipe(imagemin()).pipe(gulp.dest('./dist/assets/images'));
}

// Scripts
function scriptsDev() {
    return gulp.src('./src/assets/scripts/*.js').pipe(gulp.dest('./dev/assets/scripts'));
}

function scriptsDist() {
    return gulp.src('./src/assets/scripts/*.js').pipe(uglify()).pipe(gulp.dest('./dist/assets/scripts'));
}

// HTML
function htmlDev() {
    return gulp.src('./src/index.html').pipe(gulp.dest('./dev'));
}

function htmlDist() {
    return gulp
        .src('./src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(gulp.dest('./dist'));
}

// Exports
exports.default = () => {
    gulp.watch(
        [
            './src/index.html',
            './src/assets/scripts/*.js',
            './src/assets/styles/*.scss',
            './src/assets/styles/config/*.scss',
            './src/assets/images/**/*',
        ],
        gulp.parallel(htmlDev, scriptsDev, stylesDev, imagesDev)
    );
};

exports.build = gulp.parallel(htmlDist, scriptsDist, stylesDist, imagesDist);
