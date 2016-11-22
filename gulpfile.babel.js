import gulp from 'gulp';
import babel from 'gulp-babel';
const backendJs = ['src/app.js','src/**/*.js','!src/public/**/*.js'];
gulp.task('js', () => {
    gulp.src(backendJs, { base: 'src/' })
        .pipe(babel({
            presets: ['es2015', 'stage-0'],
        }))
        .pipe(gulp.dest('build'));
    console.log('js ok');
});

gulp.task('watch', () => {
    gulp.watch(backendJs, ['js']);
    gulp.watch('gulpfile.babel.js', ['default']);
    console.log('watch');
});
gulp.task('default', ['js','watch']);