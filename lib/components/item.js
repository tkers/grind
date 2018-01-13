import React from 'react'
import { connectInventory, canAfford } from 'grindery'

import { simpleInt } from './currencies'
import ItemActionButton from './itemActionButton'

const Item = ({ inventory, name, description, amount = 0, currency = simpleInt, action, cost, visible = true, isPrimary, isSticky }) => visible ? (
  <div className={'item' + (isPrimary? ' primary' : '') + (isSticky ? ' sticky' : '') + (!canAfford(inventory, cost) ? ' unavailable' : '')}>
    <div className='inner'>
      <div>
        {name}: <b>{currency(amount)}</b>
      </div>
      {description && <div className='description'>{description}</div>}
    </div>
    <ItemActionButton label={action} cost={cost} />
  </div>
) : null

export default connectInventory(Item)
