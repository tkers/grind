const exp = (base, mult) => num => base * Math.pow(mult, num || 0)
const lin = (base, mult) => num => base + mult * (num || 0)
const applyCurrency = (key, func) => inventory => func(inventory[key])
const sum = (...fns) => inventory => fns.reduce((acc, cur) => acc + cur(inventory), 0)

export const getCustomers = sum(
  applyCurrency('coffeeServed', lin(2, 0.004)),
  applyCurrency('turtles', lin(0, 1))
)
export const getCoffeeMachinePrice = applyCurrency('coffeeMachines', exp(30, 1.1))
export const getTurtlePrice = applyCurrency('turtles', exp(100, 1.5))
