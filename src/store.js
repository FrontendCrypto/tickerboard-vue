// import { createApp } from 'vue'
import { createStore } from 'vuex'
import { market } from './data/market'
// Create a new store instance.
const store = createStore({
  state() {
    return {
      ticker: 'btc',
      data: market['btc'],
      color: market['btc'].chart.foreColor
    }
  },
  mutations: {
    selectCoin(state, value) {
      state.ticker = value
      state.data = market[state.ticker]
      store.color = market[state.ticker].chart.foreColor
      console.log(store.color);
    }
  }
})

// const app = createApp({
//   /* your root component */
// })

// Install the store instance as a plugin
export default store
