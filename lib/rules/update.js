import { getCustomers } from './prices'

const update = inventory => [
  {
    coffee: -getCustomers(inventory),
    coffeeServed: getCustomers(inventory),
    coins: 1.20 * getCustomers(inventory)
  },
  {
    beans: (inventory.coffeeMachines || 0) * 0.5 * -0.014 ,
    coffee: (inventory.coffeeMachines || 0) * 0.5
  }
]

export default update
