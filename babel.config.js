module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    // fix Cannot use 'import.meta' outside a module
    // https://github.com/vitejs/vite/issues/1149
    function() {
      return {
        visitor: {
          MetaProperty(path) {
            path.replaceWithSourceString('process');
          }
        }
      };
    }
  ]
};
