const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "../packages/client/src"),
  entry: "./index.tsx",
  output: {
    path: path.resolve(__dirname, "../public/dist"),
    filename: "pokedex.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  }
};
