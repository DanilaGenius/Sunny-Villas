const {src, dest, watch, parallel, series} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer')

const del = require('del');
const fileinclude = require('gulp-file-include');

function styles() {
    return src('src/styles/*.scss')
        .pipe(concat('style.min.css'))
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true,
        }))
        .pipe(dest('dist/styles'))
        .pipe(browserSync.stream())
}

function watching() {
    watch(['src/styles/**/*.scss'], styles);
    watch(['src/scripts/*.js'], scripts);
    watch(['src/**/*.html'], include);
    watch(['src/*.html']).on('change', browserSync.reload);
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'dist/'
        }
    });
}

function scripts() {
    return src(['src/scripts/main.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('dist/scripts/'))
        .pipe(browserSync.stream())
}

function build() {
    return src([
        'src/styles/style.min.css',
        'src/fonts/**/*',
        'src/scripts/main.min.js',
        // 'src/index.html',
        'src/images/*'
    ], {base: 'src'})
        .pipe(dest('dist'))
        
}

function clearDist() {
    return del('dist/**')
}

function include() {
    return src(['src/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}


exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.clearDist = clearDist
exports.include = include

// exports.build = series(clearDist, build)
exports.s = parallel(styles, watching, browsersync, scripts, include)