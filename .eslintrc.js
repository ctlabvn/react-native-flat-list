module.exports = {
    root: true,
    parser: "babel-eslint",
    extends: ["standard", "standard-react"],
    globals: {
      "__DEV__": "readonly",
      navigation: "readonly",
      alert: "readonly",
      fetch: "readonly"
    },
    rules: {
      'no-extend-native': 0,
      camelcase: 0
    }
  };
  