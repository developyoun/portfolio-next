const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

module.exports = withPlugins([withImages], {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  future:{
    webpack5: true
  },
});
