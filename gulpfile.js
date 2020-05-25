const {
  src,
  dest,
  watch
} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Static server
function bs() {
  serveSass();
  minifyCSS();
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  watch('./*.html').on('change', browserSync.reload);
  watch('./sass/**/*.sass', serveSass);
  watch('./sass/**/*.scss', serveSass);
  watch('./js/*.js').on('change', browserSync.reload);
  watch('src/*.css', minifyCSS);
};

function serveSass() {
  return src('./sass/**/*.sass', './sass/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest('./css'))
    .pipe(browserSync.stream());
};

function minifyCSS() {
  return src(['css/*.css', '!css/*.min.css'])
  .pipe(cleanCSS())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(dest('css'));
};

exports.serve = bs;
exports.minifyCSS = bs;