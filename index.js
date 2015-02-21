'use strict';

var gulp   = require('gulp');
var eslint = require('gulp-eslint');
var notify = require('gulp-notify');
var elixir = require('laravel-elixir');
var path   = require('path');

elixir.extend('eslint', function (src, options) {
  src = src || [
    'public/js/**/*.js',
    '!public/js/vendor/**/*.js'
  ];

  options = options || {};

  var onError = function (err) {
    notify.onError({
      title: 'Laravel Elixir',
      subtitle: 'ESLint failed.',
      message: '<%= error.message %>',
      icon: path.join(__dirname, '../laravel-elixir/icons/fail.png')
    })(err);

    this.emit('end');
  };

  gulp.task('eslint', function () {
    return gulp.src(src)
      .pipe(eslint(options))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      .on('error', onError)
      .pipe(notify({
        title: 'Laravel Elixir',
        subtitle: 'ESLint passed.',
        message: ' ',
        icon: path.join(__dirname, '../laravel-elixir/icons/pass.png')
      }));
  });

  this.registerWatcher('eslint', src);

  return this.queueTask('eslint');
});
