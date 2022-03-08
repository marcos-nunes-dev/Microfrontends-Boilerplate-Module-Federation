const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3001,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      filename: "remoteEntry.js",
      remotes: {
        // adding itself as a remote to consume the store and leave it exposed.
        app1: "app1@http://localhost:3001/remoteEntry.js",
        // here you must put the entry point routes for all other micro frontends.
        app2: "app2@http://localhost:3002/remoteEntry.js",
      },
      exposes: {
        // Here you must place all components, hooks, stores
        // and etc that will be exposed to other micro frontends.
        "./Navigation": "./src/components/Navigation",
        "./routes": "./src/config/routes",
        "./demoContext": "./src/contexts/demoContext",
      },
      shared: {
        // The module federation handles the resolution of modules so
        // that the same package is not processed several times.
        ...deps,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps.react, // requiredVersion: "*"
        },
        "react-dom": {
          eager: true,
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "@material-ui/styles": {
          singleton: true,
        },
        "@emotion/core": {
          singleton: true,
        },
        "@emotion/styled": {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
