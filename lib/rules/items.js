import React from 'react'

const items = [
  {
    render: s => <span>💰 Money: <b>€{(s.coins || 0).toFixed(2)}</b></span>
  },
  {
    render: s => <span>💁‍ Coffee served: <b>{(s.coffeeServed || 0).toFixed(0)} cups</b></span>
  },
  {
    render: s => <span>📦 Coffee beans: <b>{(s.beans || 0).toFixed(3)} kg</b></span>,
    actionLabel: 'Buy • €2.50',
    exchange: { coins: -2.5, beans: 1 }
  },
  {
    render: s => <span>☕️ Cups of coffee: <b>{(s.coffee || 0).toFixed(0)}</b></span>,
    actionLabel: 'Brew • 14 g',
    exchange: { beans: -0.014, coffee: 1 }
  },
  {
    render: s => <span>⚙️ Coffee Machines: <b>{s.coffeeMachines || 0}</b></span>,
    visible: s => s.coffeeMachines > 0 || s.coins > 10,
    actionLabel: 'Buy • €30.00',
    exchange: { coins: -30, coffeeMachines: 1 },
  }
]

export default items
