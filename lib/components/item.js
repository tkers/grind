import React from 'react'

import connectInventory from '../core/connectInventory'
import ItemActionButton from './itemActionButton'

const Item = ({ item, inventory }) => {
  if (item.visible && !item.visible(inventory))
    return null

  return (
    <div className='item'>
      <div className='description'>
        {item.render(inventory)}
      </div>
      <ItemActionButton item={item} />
    </div>
  )
}

export default connectInventory(Item)
