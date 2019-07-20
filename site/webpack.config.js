const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/index.jsx"],
  output: {
    path: path.resolve(__dirname, "static"),
    filename: "[name].js",
    publicPath: "/"
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)/,
        use: [{ loader: "file-loader" }]
      },
      {
        test: /\.js(x)?$/,
        use: [{ loader: "babel-loader" }],
        exclude: /node_modules/
      },
      { test: /\.svg$/, use: "raw-loader" },
      {
        test: /\.(css|scss)$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.(gif|eot|woff|woff2|ttf)$/,
        loaders: ["url-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.ENVIRONMENT)
      }
    }),
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ],
  devServer: {
    compress: true,
    port: 9001,
    hotOnly: false,
    stats: "minimal",
    historyApiFallback: true
  }
};
