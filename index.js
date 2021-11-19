/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
const {getPlugin, removePlugins, pluginByName} = require('@craco/craco');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PLUGIN_NAME = 'HtmlWebpackPlugin';

module.exports = {
  overrideCracoConfig: ({cracoConfig, pluginOptions = {skipPreflightCheck: false}}) => {
    process.env.SKIP_PREFLIGHT_CHECK = pluginOptions.skipPreflightCheck;
    console.log('SKIP_PREFLIGHT_CHECK ✅');
    return cracoConfig;
  },

  overrideWebpackConfig: ({webpackConfig, pluginOptions = {options: {}}}) => {
    const {isFound} = getPlugin(webpackConfig, pluginByName(PLUGIN_NAME));
    if (isFound) {
      removePlugins(webpackConfig, pluginByName(PLUGIN_NAME));
    }

    webpackConfig.plugins.push(new HtmlWebpackPlugin(pluginOptions.options));

    return webpackConfig;
  },
};
