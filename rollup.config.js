import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

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
    }),
    uglify()
  ]
}
