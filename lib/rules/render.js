import React from 'react'

import items from './items'
import Item from '../components/item'

const render = () => (
  <div>
    {items.map((item, ix) => (
      <Item key={ix} item={item} />
    ))}
  </div>
)

export default render
