module.exports = function () {
    $.gulp.task('sass:build', () => {
        return $.gulp.src('./dev/static/sass/main.sass')
            .pipe($.gp.sass({
                // 'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 version']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./build/static/css/'))
    });

    $.gulp.task('sass:dev', () => {
        return $.gulp.src('./dev/static/sass/main.sass')
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
            .pipe($.gulp.dest('./build/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
