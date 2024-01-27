module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        // Add your custom Webpack configurations here
        webpackConfig.devServer.historyApiFallback = true;
        return webpackConfig;
      },
    },
  };
  