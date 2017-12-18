module.exports = function () {
    $.gulp.task('sass:build', () => {
        return $.gulp.src(['./src/assets/sass/main.sass', './src/assets/sass/libs.sass'])
            .pipe($.gp.sass({
                // 'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 version']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./build/assets/css/'))
    });

    $.gulp.task('sass:src', () => {
        return $.gulp.src(['./src/assets/sass/main.sass', './src/assets/sass/libs.sass'])
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({
                // 'include css': true
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Sass',
                    message: error.message
                };
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 version']
            }))
            .pipe($.gulp.dest('./build/assets/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
