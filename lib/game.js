import React from 'react'
import { createGame } from './gameRunner'

const initialInventory = { coins: 10 }

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

const items = [
  {
    name: "Money",
    value: s => `€${(s.coins || 0).toFixed(2)}`
  },
  {
    name: "Coffee served",
    value: s => <b>{(s.coffeeServed || 0).toFixed(0)} cups</b>
  },
  {
    name: "Coffee beans",
    value: s => `${(s.beans || 0).toFixed(3)} KG`,
    action: 'Buy [€2.50]',
    disabled: s => s.coins < 2.5,
    exchange: { coins: -2.5, beans: 1 }
  },
  {
    name: "Cups of coffee",
    value: s => (s.coffee || 0).toFixed(0),
    action: 'Brew [14g]',
    disabled: s => (s.beans || 0) < 0.014,
    exchange: { beans: -0.014, coffee: 1 }
  },
  {
    name: "Coffee Machines",
    value: s => s.coffeeMachines || 0,
    visible: s => s.coffeeMachines > 0 || s.coins > 10,
    action: s => `Buy coffee machine [€30.00]`,
    disabled: s => s.coins < 30,
    exchange: { coins: -30, coffeeMachines: 1 },
  }
]

const renderItem = (i, inventory, buy) => {
  var g = x => x instanceof Function ? x(inventory) : x
  return (
    <div>
      {g(i.name)}: {g(i.value)} {!i.action ? '' : <button onClick={i.exchange && (() => buy(g(i.exchange)))} disabled={g(i.disabled)}>{g(i.action)}</button>}
    </div>
  )
}

const render = (inventory, buy) => (
  <div>
    {items
      .filter(i => !i.visible || i.visible(inventory))
      .map(i => renderItem(i, inventory, buy))
    }
  </div>
)

const Game = createGame({ initialInventory, update, render, interval: 250 })

export default Game
