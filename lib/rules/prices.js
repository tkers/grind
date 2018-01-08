const makePriceGraph = (base, mult) => num => base * Math.pow(mult, num || 0)
const makeGetPrice = (key, base, mult) => inventory => makePriceGraph(base, mult)(inventory[key])

export const getCustomers = makeGetPrice('coffeeServed', 2, 1.0015)
export const getCoffeeMachinePrice = makeGetPrice('coffeeMachines', 30, 1.1)
