import React from 'react'
import { connectInventory } from 'grindery'

import { simpleInt } from './currencies'
import ItemActionButton from './itemActionButton'

const Item = ({ name, description, amount = 0, currency = simpleInt, action, cost, visible = true, isPrimary }) => visible ? (
  <div className={'item' + (isPrimary ? ' primary' : '')}>
    <div className='inner'>
      <div>
        {name}: <b>{currency(amount)}</b>
      </div>
      {description && <div className='description'>{description}</div>}
    </div>
    <ItemActionButton label={action} cost={cost} />
  </div>
) : null

export default Item
