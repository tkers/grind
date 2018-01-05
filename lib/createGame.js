import { tryExchange, reduceExchanges } from './utils/exchange'

// creates a new game
const createGame = (initialInventory = {}, draw, step, dt = 1000) => {

  // tries to add the given vector to the current inventory
  // but only updates if no value becomes negative
  const buy = diff => {
    const newInventory = tryExchange(inventory, diff)
    setInventory(newInventory)
  }

  // creates and updates the inventory
  let inventory = initialInventory
  const setInventory = newValue => {
    inventory = newValue
    redraw()
  }

  // calls the draw method with current inventory
  const redraw = () => draw(inventory, buy)

  // performs the initial draw
  redraw()

  // starts the game loop, calling step() on every tick
  // and processing all exchanges returned by it
  const timer = setInterval(() => {
    const stepDiffs = step(inventory, dt / 1000)
    const newInventory = reduceExchanges(inventory, stepDiffs)
    setInventory(newInventory)
  }, dt)

  // return a callback function to stop the game loop
  return () => clearInterval(timer)
}

export default createGame
