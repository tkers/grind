import React from 'react'
import { connectInventory, canAfford } from 'grindery'

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
