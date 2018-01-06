import { createGame } from '../core/gameRunner'

import initialInventory from '../rules/initialInventory'
import update from '../rules/update'
import render from '../rules/render'

const Game = createGame({ initialInventory, update, render, fps: 4 })

export default Game
