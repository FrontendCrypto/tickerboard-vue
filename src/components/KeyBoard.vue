<script>
import { market } from '../data/market'
import Actions from './Actions.vue'
import Categories from './Categories.vue'
import Coin from './keyboard/Coin.vue'
import Tab from './keyboard/Tab.vue'
import Configuration from './Configuration.vue'

import store from '../store'

export default {
  components: {
    Categories,
    Coin,
    Actions,
    Tab,
    Configuration
  },
  data() {
    return {
      isFavorite: true,
    }
  },

  methods: {

  },

  computed: {
    filteredMarketData() {
      return Object.values(market).slice(0, 18) // Get only 18 elements from market
    },
    actions() {
      return store.state.user.configuration.showActions
    },
    categories() {
      return store.state.user.configuration.showCategories
    }
  }
}
</script>

<template>
  <div class="keyboard">
    <Configuration />
    <Tab />
    <Categories v-show="categories" />
    <div class="coins">
      <Coin v-for="coin in filteredMarketData" :ticker="coin.ticker" :key="coin.ticker" />
    </div>
    <!-- @todo -->
    <Actions :isFavorite="true" v-show="actions" />
  </div>
</template>

<style scoped lang="scss">
.coins {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 48px);
  gap: 4px;
  overflow: hidden;
}

.keyboard {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  z-index: 3;
  width: 100%;
}
</style>