const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();
const rehypePrism = require('@mapbox/rehype-prism');

const withMdx = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugin: [],
    rehypePlugins: [rehypePrism],
  },
});
/** @type {import('next').NextConfig} */
const nextConfig = withMdx({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});

module.exports = withVanillaExtract(nextConfig);
