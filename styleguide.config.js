const path = require("path");

module.exports = {
  components: "src/components/**/*.{js,jsx}",
    ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.styled.{js,jsx,ts,tsx}',
  ],
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Arial'
      }
    }
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
