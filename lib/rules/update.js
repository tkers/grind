import { getCustomers } from './prices'

const _repeat = n => x => Array.apply(null, new Array(Math.floor(n || 0))).map(_ => x);
const repeat = (x, n) => typeof n === 'undefined' ? _repeat(x) : _repeat(n)(x)

const update = inventory => [
  ...repeat(inventory.coffeeMachines)({
    beans: -0.014,
    coffee: 1
  }),
  ...repeat(5)({
    giftCards: -1,
    coffee: -1,
    coffeeServed: 1
  }),
  ...repeat(getCustomers(inventory))({
    coffee: -1,
    coffeeServed: 1,
    coins: 1.20
  })
]

export default update
