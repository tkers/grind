import React from 'react'

const SimpleInt = ({ value = 0 }) => <div><b>{value.toFixed(0)}</b></div>

export const Coins = ({ value = 0 }) => <div><b>€{value.toFixed(2)}</b></div>
export const CoffeeServed = ({ value = 0 }) => <div><b>{value.toFixed(0)} cups</b></div>
export const Customers = ({ value = 0 }) => <div><b>{value.toFixed(1)}</b>/s</div>
export const Beans = ({ value = 0 }) => <div><b>{value.toFixed(3)} kg</b></div>
export const Coffees = SimpleInt
export const CoffeeMachines = SimpleInt
