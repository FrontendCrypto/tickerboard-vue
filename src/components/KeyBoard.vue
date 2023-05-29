<script>
import { market } from '../data/market'
import Actions from './Actions.vue'
import Categories from './Categories.vue'
import Coin from './keyboard/Coin.vue'
import Tab from './keyboard/Tab.vue'
import Notch from './keyboard/Notch.vue'
import Configuration from './Configuration.vue'
import anime from 'animejs/lib/anime.es.js';

import store from '../store'

export default {
  components: {
    Notch,
    Categories,
    Coin,
    Actions,
    Tab,
    Configuration
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
    },
    isVisible() {
      return store.getters.isKeyboardVisible
    }
  },
  watch: {
    isVisible(value) {
      value ? this.hide() : this.show()
    }
  },
  methods: {
    show() {
      anime({
        targets: this.$refs.keyboard,
        bottom: 0
      })
      this.$store.commit('hideConfiguration')
      // Hide configuration if open
    },
    hide() {
      const height = this.$refs.keyboard.offsetHeight;
      anime({
        targets: this.$refs.keyboard,
        bottom: -height
      })
      this.$store.commit('hideConfiguration')
      // this.$refs.keyboard.style.bottom = `-${height}px`
      //hide configuration if open
      // console.log('hide', this.$refs.keyboard);
    }
  }
}
</script>

<template>
  <div class="keyboard" ref="keyboard">
    <Notch />
    <Configuration class="configuration" />
    <Tab />
    <Categories v-show="categories" />
    <div class="coins">
      <Coin v-for="coin in filteredMarketData" :ticker="coin.ticker" :key="coin.ticker" />
    </div>
    <!-- @todo -->
    <Actions v-show="actions" />
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
  user-select: none;

  &::after {
    content: '';
    background-color: #ffffff;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
}

.configuration {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}
</style>