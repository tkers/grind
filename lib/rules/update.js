const update = inventory => [
  {
    coffee: -1,
    coffeeServed: 1,
    coins: 1.20
  },
  {
    beans: (inventory.coffeeMachines || 0) * 0.5 * -0.014 ,
    coffee: (inventory.coffeeMachines || 0) * 0.5
  }
]

export default update
