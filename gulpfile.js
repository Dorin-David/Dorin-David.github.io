const {src, dest} = require('gulp');
const minImg = require('gulp-imagemin');

function minifyImg() {
    return src('./src/assets/images/*').pipe(minImg()).pipe(dest('./public/images'))
}


exports.default =  minifyImg