import cssnext from 'cssnext';
import csswring from 'csswring';
import mqpacker from 'css-mqpacker';
import gulp from 'gulp';
import postcss from 'gulp-postcss'
import rename from 'gulp-rename';
import precss from 'precss';

gulp.task('styles', () => {
  let processors = [
    precss(),
    cssnext(),
    mqpacker(),
    csswring()
  ];

  return gulp.src('./app.css')
    .pipe(postcss(processors))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', ['styles'], () => {
  gulp.watch('./app.css', ['styles']);
});

gulp.task('default', ['styles']);
