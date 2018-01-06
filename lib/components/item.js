import React from 'react'

import connectInventory from '../core/connectInventory'
import ItemActionButton from './itemActionButton'

const Item = ({ item, inventory }) => {
  if (item.visible && !item.visible(inventory))
    return null

  return (
    <div>
      {item.render(inventory)} <ItemActionButton item={item} />
    </div>
  )
}

export default connectInventory(Item)
