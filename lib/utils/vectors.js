export const add = (...vectors) => vectors.reduce((acc, cur) => {
  Object.keys(cur).forEach(
    key => acc[key] = (acc[key] || 0) + cur[key]
  )
  return acc
}, {})

const isNil = x => typeof x === 'undefined'

const _scale = a => vector => Object.keys(vector).reduce((acc, key) => {
  acc[key] = a * vector[key]
  return acc
}, {})
export const scale = (vector, a) => isNil(a) ? _scale(vector) : _scale(a)(vector)

const _some = f => vector => Object.keys(vector).reduce((acc, key) => acc || f(vector[key], key), false)
export const some = (vector, f) => isNil(f) ? _some(vector) : _some(f)(vector)
