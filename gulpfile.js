const {src, dest, parallel} = require('gulp');
const minImg = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const minfify = require('gulp-minify');

function minifyImg() {
    return src('./src/assets/images/*/*').pipe(minImg()).pipe(dest('./public/images'))
}

function minifyCSS(){
    return src('./src/style/*.css').pipe(cleanCSS()).pipe(dest('./public/style'))
}

function minifyJS(){
    return src('./src/js/*.js').pipe(minfify()).pipe(dest('./public/js'))
}


exports.default =  parallel(minifyImg, minifyCSS, minifyJS)