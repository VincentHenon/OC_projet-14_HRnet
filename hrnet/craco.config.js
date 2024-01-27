module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        // Add your custom Webpack configurations here
        webpackConfig.devServer.historyApiFallback = true;
        return webpackConfig;
      },
    },
  };

  /* change react script 'npm run start' with 'npm craco start' and 'npm run build' with 'npm craco build' */
  