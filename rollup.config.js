import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
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
      presets: [
        ['env', { modules: false }],
        'react'
      ],
      exclude: 'node_modules/**',
      babelrc: false
    }),
    resolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    uglify()
  ]
}
