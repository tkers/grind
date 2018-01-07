import { createGame } from 'grindery'

import initialInventory from '../rules/initialInventory'
import update from '../rules/update'
import render from '../rules/render'

const Game = createGame({ initialInventory, update, render, fps: 4 })

export default Game
