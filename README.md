# laravel-elixir-eslint

## Install

```sh
$ npm install laravel-elixir-eslint --save-dev
$ touch .eslintrc
```

## Usage

### Example Gulpfile

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-eslint');

elixir(function(mix) {
  mix.eslint();
});
```

### Advanced example

```javascript
mix.eslint([
  'public/js/**/*.js',
  '!public/js/vendor/**/*.js'
]);
```
