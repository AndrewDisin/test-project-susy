module.exports = function () {
    var postcss = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');
    var mqpacker = require('css-mqpacker');
    var pxtorem = require('postcss-pxtorem');

    $.gulp.task('sass:build', () => {
        var processors = [ pxtorem({replace: false}), mqpacker({sort: true }), autoprefixer({browsers: ['last 10 version']}) ];
        return $.gulp.src(['./src/assets/sass/main.sass', './src/assets/sass/libs.sass'])
            .pipe($.gp.sass({
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe(postcss(processors))
            .pipe($.gulp.dest('./build/assets/css/'))
    });

    $.gulp.task('sass:src', () => {
        var processors = [ pxtorem({replace: false}), mqpacker({sort: true }), autoprefixer({browsers: ['last 10 version']}) ];
        return $.gulp.src(['./src/assets/sass/main.sass', './src/assets/sass/libs.sass'])
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Sass',
                    message: error.message
                };
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe(postcss(processors))
            .pipe($.gulp.dest('./build/assets/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
