const {
  VanillaExtractPlugin
} = require('@vanilla-extract/webpack-plugin');

const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1a1a1a' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    plugins: [new VanillaExtractPlugin()],
  }
};