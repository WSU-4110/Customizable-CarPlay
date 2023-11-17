module.exports = function(api) {
  api.cache(false);

  return {
    presets: ['babel-preset-expo'],
    plugins: ['@babel/plugin-transform-modules-commonjs'] // Add this line to handle ES6 modules
  };
};
