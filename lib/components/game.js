import { createGame } from '../core/gameRunner'

import initialInventory from '../rules/initialInventory'
import update from '../rules/update'
import render from '../rules/render'

const Game = createGame({ initialInventory, update, render, interval: 250 })

export default Game
