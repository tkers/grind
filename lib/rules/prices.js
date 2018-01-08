const makePriceGraph = (base, mult) => num => base * Math.pow(mult, num || 0)
const makeGetPrice = (key, base, mult) => inventory => makePriceGraph(base, mult)(inventory[key])

export const getCustomers = i => makeGetPrice('coffeeServed', 2, 1.0015)(i) + (i.turtles || 0)
export const getCoffeeMachinePrice = makeGetPrice('coffeeMachines', 30, 1.1)
