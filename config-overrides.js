const {
    VanillaExtractPlugin
} = require('@vanilla-extract/webpack-plugin');

module.exports = function override(config, env) {
    // New config, e.g. config.plugins.push...
    config.plugins.push(new VanillaExtractPlugin())
    return config
}