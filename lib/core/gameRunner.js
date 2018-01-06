import React from 'react'
import PropTypes from 'prop-types'

import { scale } from '../utils/vectors'
import { tryExchange, reduceExchanges } from '../utils/exchange'

const makeTransformer = f => x => x instanceof Array ? x.map(f) : f(x)

class GameRunner extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inventory: this.props.initialInventory
    }
    this.step = this.step.bind(this)
    this.exchange = this.exchange.bind(this)
    this.scaleStep = makeTransformer(scale(1 / this.props.fps))
  }

  componentDidMount() {
    this.gameLoopInterval = setInterval(this.step, 1000 / this.props.fps)
  }

  componentWillUnmount() {
    clearInterval(this.gameLoopInterval)
  }

  step() {
    const diffs = this.props.update(this.state.inventory)
    const scaledDiffs = this.scaleStep(diffs)
    const inventory = reduceExchanges(this.state.inventory, scaledDiffs)
    this.setState({ inventory })
  }

  exchange(diff) {
    const inventory = tryExchange(this.state.inventory, diff)
    this.setState({ inventory })
  }

  getChildContext() {
    return {
      inventory: this.state.inventory,
      exchange: this.exchange
    }
  }

  render() {
    return this.props.render(this.state.inventory, this.exchange)
  }
}

GameRunner.defaultProps = {
  initialInventory: {},
  fps: 1,
  update: () => [],
  render: () => null
}

GameRunner.childContextTypes = {
  inventory: PropTypes.object,
  exchange: PropTypes.func
};

export default GameRunner

export const createGame = opts => () => <GameRunner {...opts} />
