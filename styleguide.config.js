const path = require("path");
const sections = require('./styleguidist/sections');

module.exports = {
  sections: sections,
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Arial'
      }
    }
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/Wrapper.js')
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
  },
  title: "Reaktus, by Caktus",
  styleguideDir: "dist-docs",
  moduleAliases: {
    reaktus: path.resolve(__dirname, "src"),
  },
};