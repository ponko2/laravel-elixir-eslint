# laravel-elixir-eslint

[![Greenkeeper badge](https://badges.greenkeeper.io/ponko2/laravel-elixir-eslint.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/laravel-elixir-eslint.svg)](https://badge.fury.io/js/laravel-elixir-eslint)
[![Build Status](https://travis-ci.org/ponko2/laravel-elixir-eslint.svg?branch=master)](https://travis-ci.org/ponko2/laravel-elixir-eslint)

## Install

```sh
$ npm install laravel-elixir-eslint --save-dev
$ touch .eslintrc
```

## Usage

### Example Gulpfile

```javascript
// gulpfile.js
var elixir = require('laravel-elixir');

require('laravel-elixir-eslint');

elixir(function(mix) {
  mix.eslint();
});
```

### Advanced example

```javascript
var elixir = require('laravel-elixir');
var config = elixir.config;

require('laravel-elixir-eslint');

elixir(function(mix) {
  mix.browserify('main.js')
    .version(['js/main.js'])
    .eslint([
      config.get('assets.js.folder') + '/**/*.js',
      '!' + config.get('public.js.outputFolder') + '/main.js'
    ]);
});
```

## Options

### Sources
Type: `String` or `Array`

Glob or array of globs to read. Using this will overwrite all defaults.

Default:

```javascript
mix.eslint([
  'public/js/**/*.js',
  'resources/assets/js/**/*.js'
]);
```

_The prefix `!` is for excluding files._

### ESLint options

Type: `Object`

Options for ESLint.

_See [eslint.org/docs/user-guide/configuring](http://eslint.org/docs/user-guide/configuring)_

## Credits
- [gulp-eslint](https://github.com/adametry/gulp-eslint)
- [laravel-elixir](https://github.com/laravel/elixir)
- [All contributors](https://github.com/ponko2/laravel-elixir-eslint/graphs/contributors) to this project.
