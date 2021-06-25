const {src, dest, parallel} = require('gulp');
const minImg = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');

function minifyImg() {
    return src('./src/assets/images/*').pipe(minImg()).pipe(dest('./public/images'))
}

function minifyCSS(){
    return src('./src/style/*.css').pipe(cleanCSS()).pipe(dest('./public/style'))
}


exports.default =  parallel(minifyImg, minifyCSS)