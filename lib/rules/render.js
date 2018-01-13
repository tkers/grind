import React from 'react'

import Item from '../components/item'
import { coins, coffeeServed, customers, beans, coffees, coffeeMachines, giftCards, turtles } from '../components/currencies'
import { getCustomers, getCoffeeMachinePrice, getTurtlePrice } from './prices'

const render = inventory => (
  <div>
    <Item
      name='💁‍ Coffee served'
      amount={inventory.coffeeServed}
      currency={coffeeServed}
      isPrimary
    />
    <Item
      name='💰 Money'
      amount={inventory.coins}
      currency={coins}
      isPrimary
      isSticky
    />
    <Item
      name='🛒 Customers'
      amount={getCustomers(inventory)}
      currency={customers}
    />
    <Item
      name='📦 Coffee beans'
      amount={inventory.beans}
      currency={beans}
      action='Buy • €2.50'
      cost={{ coins: -2.5, beans: 1000 }}
    />
    <Item
      name='☕️ Coffee ready'
      amount={inventory.coffee}
      currency={coffees}
      action='Brew • 14 g'
      cost={{ beans: -14, coffee: 1 }}
    />
    <Item
      name='⚙️ Coffee machines'
      description='Automatically brews 1 coffee every second'
      amount={inventory.coffeeMachines}
      currency={coffeeMachines}
      action={`Buy • €${getCoffeeMachinePrice(inventory).toFixed(2)}`}
      cost={{ coins: -getCoffeeMachinePrice(inventory), coffeeMachines: 1 }}
      visible={inventory.coffeeServed >= 10}
    />
    <Item
      name='🎟 Gift cards'
      description='Gift cards attract more people who like free coffee'
      amount={inventory.giftCards}
      currency={giftCards}
      action='Hand out'
      cost={{ giftCards: 100 }}
      visible={inventory.coffeeServed >= 100}
    />
    <Item
      name='🐢 Friendly turtles'
      description='Customers may only pet a turtle when they order a drink'
      amount={inventory.turtles}
      currency={turtles}
      action={`Train • €${getTurtlePrice(inventory).toFixed(2)}`}
      cost={{ coins: -getTurtlePrice(inventory), turtles: 1 }}
      visible={inventory.coffeeServed >= 250}
    />
  </div>
)

export default render
