const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');

function css() {
    return src("./src/scss/app.scss")
        .pipe(sass())
        .pipe(dest("./build/css"));
}

function minificarCss() {
    return src("./src/scss/app.scss")
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest("./build/css"));
}

function watchArchivo() {
    watch('./src/scss/**/*.scss', css);
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.watchArchivo = watchArchivo;