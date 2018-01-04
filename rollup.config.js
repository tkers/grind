import babel from 'rollup-plugin-babel'

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/grind.umd.js',
    format: 'umd',
    name: 'Grind'
  },
  plugins: [
    babel({
      presets: [['env', { modules: false }]],
      babelrc: false
    })
  ]
}
