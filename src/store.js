import { createStore } from 'vuex'
import { market } from './data/market'

const store = createStore({
  state() {
    return {
      ticker: 'btc',
      data: market['btc'],
      color: market['btc'].chart.foreColor,
      series: market['btc'].chart.series[0].data
    }
  },
  mutations: {
    selectCoin(state, value) {
      state.ticker = value
      state.data = market[state.ticker]
      store.color = market[state.ticker].chart.foreColor
      store.series = market[state.ticker].chart.series[0].data
    }
  }
})

export default store
