const path = require('path');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  typescript: { reactDocgen: false },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../public'],
  webpackFinal(baseConfig) {
    baseConfig.resolve.alias = {
      ...baseConfig.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      '@public': path.resolve(__dirname, '../public'),
    };
    const { module = {}, plugins = {} } = baseConfig;

    const cssRule = module.rules.find((rule) => rule?.test?.test('test.css'));
    cssRule.test = /.*(?<!\.vanilla)\.css$/;

    return {
      ...baseConfig,
      plugins: [
        ...plugins,
        new VanillaExtractPlugin(),
        new MiniCssExtractPlugin(),
      ],
      module: {
        ...module,
        rules: [
          ...module.rules,
          {
            test: /\.vanilla\.css$/i,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve('css-loader'),
                options: {
                  url: false,
                },
              },
            ],
          },
        ],
      },
    };
  },
};
