import { scale, add, some } from './utils/vectors'

const isNegative = x => x < 0
const ensureArray = x => x instanceof Array ? x : [x]

// starts a new game
export default (initialInventory = {}, draw, step, dt = 1000) => {

  // tries to add the given vector to the current inventory
  // but only updates if no value becomes negative
  const buy = toAdd => {
    const newInventory = add(inventory, toAdd)
    if (some(newInventory, isNegative))
      return
    setInventory(newInventory)
  }

  // calls the draw method with current inventory
  const redraw = () => draw(inventory, buy)

  // creates and updates the inventory
  let inventory = initialInventory
  const setInventory = newValue => {
    inventory = newValue
    redraw()
  }

  // starts the game loop, calling step() on every tick
  // and processing all transactions returned by it
  const timer = setInterval(() => {
    const stepTransactions = step(inventory, dt / 1000)
    const newInventory = ensureArray(stepTransactions).reduce((acc, cur) => {
        const newAcc = add(acc, cur)
        if (some(newAcc, isNegative))
          return acc
        return newAcc
      }, inventory)
    setInventory(newInventory)
  }, dt)

  // performs the initial draw
  redraw()

  // return a callback function to stop the game loop
  return () => clearInterval(timer)
}
