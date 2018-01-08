import React from 'react'
import { connectInventory } from 'grindery'

import ItemActionButton from './itemActionButton'

const Item = ({ item, inventory }) => {
  if (item.visible && !item.visible(inventory))
    return null

  const label = item.actionLabel instanceof Function
    ? item.actionLabel(inventory)
    : item.actionLabel

  const cost = item.exchange instanceof Function
    ? item.exchange(inventory)
    : item.exchange

  return (
    <div className={'item' + (item.primary ? ' primary' : '')}>
      <div className='description'>
        <div>
          {item.render(inventory)}
        </div>
        {item.info && <div className='info'>{item.info}</div>}
      </div>
      <ItemActionButton label={label} cost={cost} />
    </div>
  )
}

export default connectInventory(Item)
