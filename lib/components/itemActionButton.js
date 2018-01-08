import React from 'react'
import { connectInventory, canAfford } from 'grindery'

const ItemActionButton = ({ label, cost, inventory, exchange }) => {
  if (!label)
    return null

  return (
    <button
      onClick={() => exchange(cost)}
      disabled={!canAfford(inventory, cost)}
    >
      {label}
    </button>
  )
}

export default connectInventory(ItemActionButton)
