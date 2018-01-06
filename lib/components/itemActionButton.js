import React from 'react'

import connectInventory from '../core/connectInventory'
import { canAfford } from '../utils/exchange'

const ItemActionButton = ({ item, inventory, exchange }) => {
  if (!item.actionLabel)
    return null

  const label = item.actionLabel instanceof Function
    ? item.actionLabel(inventory)
    : item.actionLabel

  return (
    <button
      onClick={() => exchange(item.exchange)}
      disabled={!canAfford(inventory, item.exchange)}
    >
      {label}
    </button>
  )
}

export default connectInventory(ItemActionButton)
