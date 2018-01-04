export const add = (...vectors) => vectors.reduce((acc, cur) => {
  Object.keys(cur).forEach(
    key => acc[key] = (acc[key] || 0) + cur[key]
  )
  return acc
}, {})

export const scale = (vector, a) => Object.keys(vector).reduce((acc, key) => {
  acc[key] = a * vector[key]
  return acc
}, {})

export const some = (vector, f) => Object.keys(vector).reduce((acc, key) => acc || f(vector[key], key), false)
