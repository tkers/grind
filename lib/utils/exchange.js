import { add, some } from './vectors'

const ensureArray = x => x instanceof Array ? x : [x]

// reduces multiple diff vectors into the current inventory
// skipping exchanges that would result in negative values
export const reduceExchanges = (inventory, diffs) =>
  ensureArray(diffs).reduce(tryExchange, inventory)

const isNegative = x => x < 0
const someNegative = some(isNegative)

// adds the diff vector to the inventory and returns the new inventory
// but only if the exchange does not result in any negative values
export const tryExchange = (inventory, diff) => {
  const newInventory = add(inventory, diff)
  return someNegative(newInventory) ? inventory : newInventory
}
