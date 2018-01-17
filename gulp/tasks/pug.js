module.exports = function() {
    $.gulp.task('pug', ()=>  {
        return $.gulp.src('./src/pug/pages/*.pug')
            .pipe($.gp.pug({
                locals : {
                    nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf8')),
                    content: JSON.parse($.fs.readFileSync('./data/content.json', 'utf8')),
                    catalog: JSON.parse($.fs.readFileSync('./data/catalog.json', 'utf8')),
                    aboutCompany: JSON.parse($.fs.readFileSync('./data/aboutCompany.json', 'utf8')),
                    card: JSON.parse($.fs.readFileSync('./data/itemCard.json', 'utf8')),
                    contacts: JSON.parse($.fs.readFileSync('./data/contacts.json', 'utf8')),
                    myProfile: JSON.parse($.fs.readFileSync('./data/myProfile.json', 'utf8')),
                    registration: JSON.parse($.fs.readFileSync('./data/registration.json', 'utf8')),
                },
                pretty: true
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
