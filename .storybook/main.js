const path = require('path');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  typescript: {
    reactDocgen: false,
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal(baseConfig) {
    baseConfig.resolve.alias = {
      ...baseConfig.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      '@public': path.resolve(__dirname, '../public'),
    };

    // Add Vanilla-Extract and MiniCssExtract Plugins
    baseConfig.plugins?.push(
      new VanillaExtractPlugin(),
      new MiniCssExtractPlugin(),
    );

    // Exclude vanilla extract's "*.vanilla.css" files from other "*.css" processing
    baseConfig.module?.rules?.forEach((rule) => {
      if (
        typeof rule !== 'string' &&
        rule.test instanceof RegExp &&
        rule.test.test('test.css')
      ) {
        rule.exclude = /\.vanilla\.css$/i;
      }
    });

    baseConfig.module?.rules?.push({
      test: /\.vanilla\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: require.resolve('css-loader'),
          options: {
            // Required as image imports should be handled via JS/TS import statements
            url: false,
          },
        },
      ],
    });

    return baseConfig;
  },
  docs: {
    autodocs: true,
  },
};
