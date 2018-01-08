import React from 'react'

import { getCustomers, getCoffeeMachinePrice } from './prices'
import { Coins, CoffeeServed, Customers, Beans, Coffees, CoffeeMachines, GiftCards, Turtles } from '../components/resources'

const visibleAt = minCoffeeServed => s => Math.ceil(s.coffeeServed) >= minCoffeeServed

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
    visible: visibleAt(10),
    actionLabel: i => `Buy • €${getCoffeeMachinePrice(i).toFixed(2)}`,
    exchange: i => ({ coins: -getCoffeeMachinePrice(i), coffeeMachines: 1 }),
  },
  {
    render: s => <div>🎟 Gift cards: <GiftCards value={s.giftCards} /></div>,
    info: 'Gift cards attract more people who like free coffee',
    visible: visibleAt(75),
    actionLabel: 'Hand out',
    exchange: { giftCards: 100 }
  },
  {
    render: s => <div>🐢 Friendly turtles: <Turtles value={s.turtles} /></div>,
    info: 'Customers may only pet a turtle when they order a drink',
    visible: visibleAt(250),
    actionLabel: 'Train • €100',
    exchange: { coins: -100, turtles: 1 }
  }
]

export default items
