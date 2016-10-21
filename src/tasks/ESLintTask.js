/* eslint-disable class-methods-use-this, global-require */

let eslint;

export default class ESLintTask extends Elixir.Task {
  /**
   * Create a new ESLintTask instance.
   *
   * @param {string}      name    Task name
   * @param {GulpPaths}   paths   Gulp src and output paths
   * @param {object|null} options ESLint options
   */
  constructor(name, paths, options) {
    super(name, null, paths);

    this.output  = '\u200B';
    this.options = options;
  }

  /**
   * Lazy load the task dependencies.
   *
   * @returns {void}
   */
  loadDependencies() {
    eslint = require('gulp-eslint');
  }

  /**
   * Build up the Gulp task.
   *
   * @returns {void}
   */
  gulpTask() {
    return gulp.src(this.src.path)
      .pipe(this.lint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      .on('error', this.onError());
  }

  /**
   * Register file watchers.
   *
   * @returns {void}
   */
  registerWatchers() {
    this.watch(this.src.path);
  }

  /**
   * Lint task
   *
   * @returns {Stream} Object stream usable in Gulp pipes.
   */
  lint() {
    this.recordStep(`Executing ${this.ucName()}`);
    return eslint(this.options);
  }
}
