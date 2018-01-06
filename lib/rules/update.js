const update = (inventory, dt) => [
  {
    coffee: dt * -1,
    coffeeServed: dt,
    coins: dt * 1.20
  },
  {
    beans: (inventory.coffeeMachines || 0) * dt * 0.5 * -0.014 ,
    coffee: (inventory.coffeeMachines || 0) * dt * 0.5
  }
]

export default update
