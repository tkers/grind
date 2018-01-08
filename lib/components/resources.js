import React from 'react'

const SimpleInt = ({ value = 0 }) => <span><b>{value.toFixed(0)}</b></span>

export const Coins = ({ value = 0 }) => <span><b>€{value.toFixed(2)}</b></span>
export const CoffeeServed = ({ value = 0 }) => <span><b>{value.toFixed(0)} cups</b></span>
export const Customers = ({ value = 0 }) => <span><b>{value.toFixed(1)}</b>/s</span>
export const Beans = ({ value = 0 }) => <span><b>{value.toFixed(3)} kg</b></span>
export const Coffees = SimpleInt
export const CoffeeMachines = SimpleInt
export const GiftCards = SimpleInt
export const Turtles = SimpleInt
