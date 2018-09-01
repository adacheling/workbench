const express    = require('express');
const logger     = require('morgan');

module.exports = {
  development(app) {
    const webpack       = require('webpack');
    const middleware    = require('webpack-dev-middleware');
    const hotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('./webpack.config.development');

    const compiler = webpack(webpackConfig);

    app.use(middleware(compiler, {
      noInfo:     true,
      publicPath: webpackConfig.output.publicPath,
    }));

    app.use(hotMiddleware(compiler));

    /**
     * logging: Concise output colored by response status for development use.
     * The :status token will be colored
     * red for server error codes,
     * yellow for client error codes,
     * cyan for redirection codes, and
     * uncolored for all other codes.
     * @see https://github.com/expressjs/morgan
     */
    app.use(logger('dev'));
  },

  /**
   * production configuration.
   * Does not use webpack.
   * Webpack shoul have already been built into static files
   */
  production(app) {
    app.use(express.static('dist'));

    /**
     * logging: Standard Apache common log output.
     * @see https://github.com/expressjs/morgan
     */
    app.use(logger('common'));
  },
};
