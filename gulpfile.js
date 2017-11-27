const gulp = require('gulp')
const pug = require('gulp-pug')
const browserSync = require('browser-sync').create()


// const pathSrc = {
//     htmlTemplate: 'src/pug/*.pug'
// }

// const pathPublic = {
//     baseDir: 'public/',
//     html: 'public/*.html'

// }


// gulp.task('taskHtml', () => {
//     return gulp.src('src/pug/*.pug')
//                .pipe(pug({
//                    pretty: '\t',
//                    compileDebug: false
//                }))
//             .pipe(gulp.dest('public/'))
// })


// gulp.task('watch', ['taskHtml'], (done) => {
//     browserSync.reload();
//     done();
// })

// // Server
// gulp.task('taskServer', ['taskHtml'], () => {
//     browserSync.init({
//         server: {
//             baseDir: './public'
//         }
//     });

//     gulp.watch('src/pug/*.pug', ['watch']);
//     gulp.watch("public/*.html").on('change', browserSync.reload);


// });

// gulp.task('default', ['taskServer'])

gulp.task('html', function taskHtml(){
    return gulp.src('./src/pug/*.pug')
               .pipe(pug({
                //    pretty: '\t'
               }))
               .pipe(gulp.dest('./public/'))
})

gulp.task('html-watch', ['html'], function(done){
    browserSync.reload()
    console.log(done)
    done()
})

gulp.task('default', ['html'] ,function(){

    browserSync.init({
        server: './public'
    })

    gulp.watch('./public/*.html', ['html-watch']);
})
