import React from 'react'
import PropTypes from 'prop-types'

const connectInventory = MyComp => {

  const WrappedComponent = (props, ctx) =>
    <MyComp inventory={ctx.inventory} exchange={ctx.exchange} {...props} />

  WrappedComponent.contextTypes = {
    inventory: PropTypes.object,
    exchange: PropTypes.func
  }

  return WrappedComponent
}

export default connectInventory
