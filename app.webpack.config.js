const webpackConfig = require('./webpack.config.js');
const webpack = require('webpack');

module.exports = (env, params = {}) => {
    const config = webpackConfig(env, params);
    config.resolve.symlinks = false;

    const { development } = env;

    const defines = {
        DEVELOPMENT: development
    };

    config.plugins.unshift(new webpack.DefinePlugin(defines));

    return config;
};
