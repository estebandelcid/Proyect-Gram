const { pathToArray } = require('graphql/jsutils/Path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const { defineConfig } = require("cypress");

module.exports = 
 {
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
    // `path` is the folder where Webpack will place your bundles
  },
  devtool: "source-map",
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new WebpackPwaManifestPlugin({
      name: "Petgram - Your pet photos app",
      shortname: "Petgram -🐱",
      description: "Find pet photos and use it as wallpaper",
      background_color: "#fff",
      theme_color: "#8d00ff",
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          sizes: [96, 128, 144, 192, 256, 384, 512],
          purpose: "any maskable",
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://res.cloudinary.com| images.unsplash.com"
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        {
          urlPattern: new RegExp(
            "https://petgram-esteban-estebandelcid.vercel.app"
          ),
          handler: "NetworkFirst",
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // plugins : ["@babel/plugin-syntax-dynamic-import"],
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
