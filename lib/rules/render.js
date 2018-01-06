import React from 'react'

import items from './items'
import Item from '../components/item'

const render = (inventory, buy) => (
  <div>
    {items.map((item, ix) => (
      <Item key={ix} item={item} inventory={inventory} buy={buy} />
    ))}
  </div>
)

export default render
