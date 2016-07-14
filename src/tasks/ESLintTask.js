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

    this.output  = undefined;
    this.options = options || {};
  }

  /**
   * Lazy load the task dependencies.
   *
   * @returns {void}
   */
  loadDependencies() {
    // eslint-disable-next-line global-require
    eslint = require('gulp-eslint');
  }

  /**
   * Build up the Gulp task.
   *
   * @returns {void}
   */
  gulpTask() {
    return gulp.src(this.src.path)
      .pipe((() => {
        this.recordStep(`Executing ${this.ucName()}`);
        return this.lint();
      })())
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
    return eslint(this.options);
  }
}
