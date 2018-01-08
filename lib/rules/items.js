import React from 'react'

import { getCustomers, getCoffeeMachinePrice } from './prices'
import { Coins, CoffeeServed, Customers, Beans, Coffees, CoffeeMachines } from '../components/resources'

const items = [
  {
    render: s => <span>💰 Money: <Coins value={s.coins} /></span>,
    primary: true
  },
  {
    render: s => <span>💁‍ Coffee served: <CoffeeServed value={s.coffeeServed} /></span>,
    primary: true
  },
  {
    render: s => <span>🛒 Customers: <Customers value={getCustomers(s)} /></span>
  },
  {
    render: s => <span>📦 Coffee beans: <Beans value={s.beans} /></span>,
    actionLabel: 'Buy • €2.50',
    exchange: { coins: -2.5, beans: 1 }
  },
  {
    render: s => <span>☕️ Coffee ready: <Coffees value={s.coffee} /></span>,
    actionLabel: 'Brew • 14 g',
    exchange: { beans: -0.014, coffee: 1 }
  },
  {
    render: s => <div>⚙️ Coffee Machines: <CoffeeMachines value={s.coffeeMachines} /></div>,
    info: 'Automatically brews 1 coffee every second',
    visible: s => s.coffeeMachines > 0 || s.coins > 10,
    actionLabel: i => `Buy • €${getCoffeeMachinePrice(i).toFixed(2)}`,
    exchange: i => ({ coins: -getCoffeeMachinePrice(i), coffeeMachines: 1 }),
  }
]

export default items
