const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies;
module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        /* The following line to ask babel
         to compile any file with extension
         .js */
        test: /\.js?$/,

        /* exclude node_modules directory from babel.
        Babel will not compile any files in this directory*/
        exclude: /node_modules/,

        // To Use babel Loader
        loader: 'babel-loader',
        options: {

          presets: ['@babel/preset-env' /* to transfer any advansed ES to ES5 */,
            '@babel/preset-react'], // to compile react to ES5
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        microFrontEnd1: 'microFrontEnd1@http://localhost:8081/remoteEntry.js',
        microFrontEnd3: 'microFrontEnd3@http://localhost:8083/remoteEntry.js',
        microFrontEnd4: 'microFrontEnd4@http://localhost:8084/remoteEntry.js',
      },
      shared: [
        {
          ...deps,
          react: {
            eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            eager: true,
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};