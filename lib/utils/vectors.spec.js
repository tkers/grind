import test from 'tape'
import { add, scale, some } from './vectors'

test('Vector:add', t => {

  t.equal(typeof add, 'function', 'exported as a function');

  t.deepEqual(add(), {}, 'defaults to empty')

  const v1a = { a: 1 }
  const v1b = { a: 2 }
  t.deepEqual(add(v1a, v1b), { a: 3 }, 'adds single key')

  const v2a = { a: 1, b: 2 }
  const v2b = { a: 2, b: 3 }
  t.deepEqual(add(v2a, v2b), { a: 3, b: 5 }, 'adds multiple keys')

  const v3a = { a: 1 }
  const v3b = { a: 2 }
  const v3c = { a: 3 }
  const v3d = { a: 4 }
  t.deepEqual(add(v3a, v3b, v3c, v3d), { a: 10 }, 'adds multiple vectors')

  const v4a = { a: 1, b: 2 }
  const v4b = { a: 2, b: 4 }
  const v4c = { a: 3, b: 8 }
  const v4d = { a: 4, b: 16 }
  t.deepEqual(add(v4a, v4b, v4c, v4d), { a: 10, b: 30 }, 'adds multiple keys and vectors')

  const v5a = { a: 1, b: 2, c: 3       }
  const v5b = {       b: 4, c: 5       }
  const v5c = {                   d: 7 }
  t.deepEqual(add(v5a, v5b, v5c), { a: 1, b: 6, c: 8, d: 7 }, 'allows partial overlap')

  t.end()
});

test('Vector:scale', t => {

  t.equal(typeof scale, 'function', 'exported as a function');

  const v1 = { a: 2 }
  const a1 = 5
  t.deepEqual(scale(v1, a1), { a: 10 }, 'scales single key')

  const v2 = { a: 2, b: 3, c: 5 }
  const a2 = 4
  t.deepEqual(scale(v2, a2), { a: 8, b: 12, c: 20 }, 'scales multiple keys')

  t.end()
})

test('Vector:some', t => {

  t.equal(typeof some, 'function', 'exported as a function');

  const isPositive = x => x >= 0

  const v1 = { a: 2, b: 4, c: 6 }
  t.equal(some(v1, isPositive), true, 'true if all match predicate')

  const v2 = { a: -7, b: 9, c: -8 }
  t.equal(some(v2, isPositive), true, 'true if at least one matches predicate')

  const v3 = { a: -1, b: -2, c: -3 }
  t.equal(some(v3, isPositive), false, 'false if none match predicate')

  t.end()
})
