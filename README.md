# laravel-elixir-eslint

[![npm version](https://badge.fury.io/js/laravel-elixir-eslint.svg)](https://badge.fury.io/js/laravel-elixir-eslint)
[![Build Status](https://travis-ci.org/ponko2/laravel-elixir-eslint.svg?branch=master)](https://travis-ci.org/ponko2/laravel-elixir-eslint)

## Install

```sh
$ npm install laravel-elixir-eslint --save-dev
$ touch .eslintrc
```

```javascript
// gulpfile.js
var elixir = require('laravel-elixir');

require('laravel-elixir-eslint');

elixir(function(mix) {
  mix.eslint();
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
  '!public/js/vendor/**/*.js'
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
