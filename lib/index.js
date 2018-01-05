import createGame from './createGame'

const items = [
  {
    name: "Money",
    value: s => `&euro;${(s.coins || 0).toFixed(2)}`
  },
  {
    name: "Coffee served",
    value: s => `<b>${(s.coffeeServed || 0).toFixed(0)} cups</b>`
  },
  {
    name: "Coffee beans",
    value: s => `${(s.beans || 0).toFixed(3)} KG`,
    action: 'Buy [&euro;2.50]',
    disabled: s => s.coins < 2.5,
    onclick: "buy({ coins: -2.5, beans: 1 })"
  },
  {
    name: "Cups of coffee",
    value: s => (s.coffee || 0).toFixed(0),
    action: 'Brew [14g]',
    disabled: s => (s.beans || 0) < 0.014,
    onclick: "buy({ beans: -0.014, coffee: 1 })"
  },
  {
    name: "Coffee Machines",
    value: s => s.coffeeMachines || 0,
    visible: s => s.coffeeMachines > 0 || s.coins > 10,
    action: s => `Buy coffee machine [&euro;30.00]`,
    disabled: s => s.coins < 30,
    onclick: s => `buy({ coins: -30, coffeeMachines: 1 })`,
  }
]

const render = inventory => {
  var g = x => x instanceof Function ? x(inventory) : x
  return items
    .filter(i => !i.visible || i.visible(inventory))
    .map(i =>
      `${g(i.name)}: ${g(i.value)} ` + (i.action ? `<button onclick="${g(i.onclick)}" ${g(i.disabled) ? "DISABLED": ""}>${g(i.action)}</button>` : '')
    )
    .join("<br />")
}

const draw = drawElement => (inventory, _buy) => {
  window.buy = _buy
  drawElement.innerHTML = render(inventory)
}

const step = (inventory, dt) => [
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

export const start = elem => {
  createGame({ coins: 10 }, draw(elem), step, 250)
}
