import React from 'react'

const items = [
  {
    render: s => <span>💰 Money: €{(s.coins || 0).toFixed(2)}</span>
  },
  {
    render: s => <span>💁‍ Coffee served: <b>{(s.coffeeServed || 0).toFixed(0)} cups</b></span>
  },
  {
    render: s => <span>📦 Coffee beans: {(s.beans || 0).toFixed(3)} KG</span>,
    actionLabel: 'Buy • €2.50',
    exchange: { coins: -2.5, beans: 1 }
  },
  {
    render: s => <span>☕️ Cups of coffee: {(s.coffee || 0).toFixed(0)}</span>,
    actionLabel: 'Brew • 14g',
    exchange: { beans: -0.014, coffee: 1 }
  },
  {
    render: s => <span>⚙️ Coffee Machines: {s.coffeeMachines || 0}</span>,
    visible: s => s.coffeeMachines > 0 || s.coins > 10,
    actionLabel: s => `Buy coffee machine • €30.00`,
    exchange: { coins: -30, coffeeMachines: 1 },
  }
]

export default items
