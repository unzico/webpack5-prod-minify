const path = require("path");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/index.ts")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  }
};
