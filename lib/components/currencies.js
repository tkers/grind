import React from 'react'

export const simpleInt = (amount = 0) => `${amount.toFixed(0)}`

export const coins = (amount = 0) => `€${amount.toFixed(2)}`
export const coffeeServed = (amount = 0) => `${amount.toFixed(0)} cups`
export const customers = (amount = 0) => `${amount.toFixed(1)}/s`
export const beans = (amount = 0) => `${amount.toFixed(3)} kg`
export const coffees = simpleInt
export const coffeeMachines = simpleInt
export const giftCards = simpleInt
export const turtles = simpleInt
