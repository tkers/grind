import test from 'tape'
import { tryExchange, reduceExchanges } from './exchange'

test('Exchange:tryExchange', t => {

  t.equal(typeof tryExchange, 'function', 'exported as a function');

  const i1 = { a: 5, b: 6 }
  const t1 = { a: -1, b: 3 }
  t.deepEqual(tryExchange(i1, t1), { a: 4, b: 9 }, 'processes exchange to inventory')

  const i2 = { a: 5, b: 6 }
  const t2 = { a: -7, b: 3 }
  t.deepEqual(tryExchange(i2, t2), i2, 'ignores exchange when any value becomes negative')
  t.equal(tryExchange(i2, t2), i2, 'returns original inventory when exchange is ignored')

  const i3 = { a: 5, b: 6, c: 7 }
  const t3 = { a: -5, b: -6, c: -7, d: 8 }
  t.deepEqual(tryExchange(i3, t3), { a: 0, b: 0, c: 0, d: 8 }, 'allows values to reach 0')

  t.end()
})

test('Exchange:reduceExchanges', t => {

  t.equal(typeof reduceExchanges, 'function', 'exported as a function');

  const i1 = { a: 8, b: 6 }
  const t1a = { a: -1, b: 2 }
  const t1b = { a: -3, b: 5 }
  t.deepEqual(reduceExchanges(i1, [t1a, t1b]), { a: 4, b: 13 }, 'processes multiple exchanges to inventory')

  const i2 = { a: 6, b: 2 }
  const t2a = { a: -10, b: 3 }
  const t2b = { a: 2, b: -9 }
  t.deepEqual(reduceExchanges(i2, [t2a, t2b]), i2, 'ignores exchanges when any value becomes negative')
  t.equal(reduceExchanges(i2, [t2a, t2b]), i2, 'returns original inventory when all exchanges are ignored')

  const i3 = { a: 6, b: 4 }
  const t3a = { a: -8, b: 10 }
  const t3b = { a: 5, b: -2 }
  t.deepEqual(reduceExchanges(i3, [t3a, t3b]), { a: 11, b: 2 }, 'processes exchanges in order (A)')
  t.deepEqual(reduceExchanges(i3, [t3b, t3a]), { a: 3, b: 12 }, 'processes exchanges in order (B)')

  t.end()
})
