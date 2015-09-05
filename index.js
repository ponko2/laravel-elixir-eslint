'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

var Elixir = require('laravel-elixir');
var config = Elixir.config;

Elixir.extend('eslint', function (src, options) {
  var paths = new Elixir.GulpPaths()
    .src(src || [
      config.get('public.js.outputFolder') + '/**/*.js',
      '!' + config.get('public.js.outputFolder') + '/vendor/**/*.js'
    ]);

  new Elixir.Task('eslint', function () {
    this.log(paths.src);

    return gulp.src(paths.src.path)
      .pipe(eslint(options || {}))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      .on('error', function () {
        this.emit('end');
      });
  }).watch(paths.src.path);
});
