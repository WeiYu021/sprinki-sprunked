const withVideos = require('next-videos')

// /** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config');
/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n,
  reactStrictMode: true,
  images: {
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
      "yuweiloopy.sbs",
      "sprunki-game-assets-worker.yuweiloopy.workers.dev"
    ],
  },
};

module.exports = withVideos(nextConfig)

// const path = require('path');

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       "lh3.googleusercontent.com",
//       "pbs.twimg.com",
//       "images.unsplash.com",
//       "logos-world.net",
//     ],
//   },
//   webpack: (config, { isServer }) => {
//     // 添加 file-loader 配置
//     config.module.rules.push({
//       test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             publicPath: '/_next',
//             name: 'static/media/[name].[hash].[ext]',
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };
