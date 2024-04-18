import path from "path";
import {fileURLToPath} from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: "./src/index.js", // The entry point of the react app
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "/", // Ensures that the paths are relative to the base of the server
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/img/favicon.ico",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  watchOptions: {
    poll: 1000, // Check for changes every second
    ignored: /node_modules/, // Ignore changes to node_modules
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true, // This is necessary for single-page applications to handle routing
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    host: "0.0.0.0", // Allows access from external devices
  },
};

