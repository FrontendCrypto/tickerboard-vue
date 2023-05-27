<script>
import { market } from '../data/market'
import Actions from './Actions.vue'
import Categories from './Categories.vue'
import Coin from './keyboard/Coin.vue'
import Tab from './keyboard/Tab.vue'

import store from '../store'

export default {
  components: {
    Categories,
    Coin,
    Actions,
    Tab,
  },
  data() {
    return {
      market: market,
      isFavorite: true,
    }
  },

  methods: {

  },

  mounted() {
    console.log(store.state.ticker)
  },

  computed: {

  }
}
</script>

<template>
  <div class="keyboard">
    <Tab />
    <Categories />
    <div class="coins">
      <Coin v-for="coin in market" :ticker="coin.ticker" :key="coin.ticker" />
    </div>
    <!-- @todo -->
    <Actions :isFavorite="true" />
  </div>
</template>

<style scoped lang="scss">
.coins {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 48px);
  gap: 4px;
}

.keyboard {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: #ffffff;
}
</style>