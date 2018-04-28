let gulp = require('gulp')
let scss = require('gulp-sass')
let browserSync = require('browser-sync')
let autoprefixer = require('gulp-autoprefixer')
let plumber = require('gulp-plumber')

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'app',
    },
    notify: false,
  })
})

gulp.task('scss', function () {
  return gulp.src('app/scss/**/*.scss')
  .pipe(plumber())
  .pipe(scss({outputStyle: 'nested'}))
  .pipe(autoprefixer(['last 15 versions']))
  .pipe(gulp.dest('app/demo'))
  .pipe(browserSync.reload({stream: true}))
})

gulp.task('html', function () {
  return gulp.src('app/demo/*.html')
  .pipe(browserSync.reload({stream: true}))
})

gulp.task('watch', ['html', 'scss', 'browser-sync'], function () {
  gulp.watch('app/demo/*.html', ['html'])
  gulp.watch('app/scss/**/*.scss', ['scss'])
})
