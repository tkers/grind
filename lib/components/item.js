import React from 'react'

import { canAfford } from '../utils/exchange'

const ItemActionButton = ({ item, inventory, buy }) => {
  if (!item.actionLabel)
    return null

  const label = item.actionLabel instanceof Function
    ? item.actionLabel(inventory)
    : item.actionLabel

  return (
    <button
      onClick={() => buy(item.exchange)}
      disabled={!canAfford(inventory, item.exchange)}
    >
      {label}
    </button>
  )

}

const Item = ({ item, inventory, buy }) => {
  if (item.visible && !item.visible(inventory))
    return null

  return (
    <div>
      {item.render(inventory)} <ItemActionButton item={item} inventory={inventory} buy={buy} />
    </div>
  )
}

export default Item
