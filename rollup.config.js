export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true
  }, {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true
  }]
};
