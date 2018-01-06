import React from 'react'

import { tryExchange, reduceExchanges } from '../utils/exchange'

class GameRunner extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inventory: this.props.initialInventory
    }
    this.step = this.step.bind(this)
    this.exchange = this.exchange.bind(this)
  }

  componentDidMount() {
    this.gameLoopInterval = setInterval(this.step, this.props.interval)
  }

  componentWillUnmount() {
    clearInterval(this.gameLoopInterval)
  }

  step() {
    const diffs = this.props.update(this.state.inventory, this.props.interval / 1000)
    const inventory = reduceExchanges(this.state.inventory, diffs)
    this.setState({ inventory })
  }

  exchange(diff) {
    const inventory = tryExchange(this.state.inventory, diff)
    this.setState({ inventory })
  }

  render() {
    return this.props.render(this.state.inventory, this.exchange)
  }
}

GameRunner.defaultProps = {
  initialInventory: {},
  interval: 1000,
  update: () => [],
  render: () => null
}

export default GameRunner

export const createGame = opts => () => <GameRunner {...opts} />
