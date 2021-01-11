const path = require("path");
const sections = require('./styleguidist/sections');
const fs = require("fs");

module.exports = {
  sections: sections,
  styles: {
    StyleGuide: {
      "@global body": {
        fontFamily: "Arial",
      },
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/Wrapper.js"),
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
  updateExample(props, exampleFilePath) {
    // props.settings are passed by any fenced code block, in this case
    const { settings, lang } = props;
    // "../mySourceCode.js"
    if (typeof settings.file === "string") {
      // "absolute path to mySourceCode.js"
      const filepath = path.resolve(exampleFilePath, settings.file);
      // displays the block as static code
      settings.static = true;
      // no longer needed
      delete settings.file;
      return {
        content: fs.readFileSync(filepath, "utf8"),
        settings,
        lang,
      };
    }
    return props;
  },
};