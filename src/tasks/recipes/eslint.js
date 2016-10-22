import ESLintTask from '../ESLintTask';

/**
 * ESLint Task
 *
 * @param {string|Array|null} src     Glob or array of globs
 * @param {object|null}       options ESLint options
 * @returns {void}
 */
function task(src, options = {}) {
  // eslint-disable-next-line no-new
  new ESLintTask('eslint', getPaths(src), options);
}

/**
 * Prep the Gulp src paths.
 *
 * @param {string|Array|null} src Glob or array of globs
 * @returns {GulpPaths} Gulp src paths
 */
function getPaths(src) {
  const config = Elixir.config;

  return new Elixir.GulpPaths()
    .src(src || [
      `${config.get('public.js.folder')}/**/*.js`,
      `${config.get('assets.js.folder')}/**/*.js`,
    ]);
}

Elixir.extend('eslint', task);
